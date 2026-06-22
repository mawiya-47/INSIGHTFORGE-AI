import React, { useState, useEffect } from "react";
import type { FC } from "react";
import { Mic, MicOff, Volume2, VolumeX, Sparkles } from "lucide-react";

interface VoiceAssistantProps {
  onVoiceInput: (text: string) => void;
  lastResponse?: string;
}

export default function VoiceAssistant({ onVoiceInput, lastResponse }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [recognition, setRecognition] = useState<any>(null);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    // Check Web Speech API availability
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-US";

      rec.onstart = () => {
        setIsListening(true);
        setTranscript("");
      };

      rec.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        if (text) {
          onVoiceInput(text);
        }
      };

      rec.onerror = (e: any) => {
        console.error("Speech Recognition error:", e);
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      setRecognition(rec);
    }
  }, [onVoiceInput]);

  useEffect(() => {
    if (lastResponse && speechEnabled) {
      speakText(lastResponse);
    }
  }, [lastResponse, speechEnabled]);

  const toggleListening = () => {
    if (!recognition) {
      alert("Speech Recognition is not fully supported in this browser environment. You can still type queries below!");
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
      try {
        recognition.start();
      } catch (error) {
        console.error("Failed to start speech recognition:", error);
      }
    }
  };

  const speakText = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    
    // Stop ongoing speech
    window.speechSynthesis.cancel();
    
    // Strip markdown tags to keep speech pristine
    const cleanText = text
      .replace(/[\#\*\_:\-\[\]\(\)\n]/g, " ")
      .replace(/  +/g, " ")
      .substring(0, 250); // read a pleasant summary

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const toggleSpeechOutput = () => {
    setSpeechEnabled(!speechEnabled);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="glass rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-violet-600/20 text-violet-400 rounded-xl relative">
          <Sparkles className="h-6 w-6 animate-pulse" />
          {isListening && (
            <span className="absolute top-0 right-0 h-3.6 w-3.6 rounded-full bg-emerald-500 ring-2 ring-slate-900 animate-ping" />
          )}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            InsightVoice Conversational AI
            {isListening && <span className="text-xs text-emerald-400 font-medium">Listening Live...</span>}
            {isSpeaking && <span className="text-xs text-violet-400 font-medium tracking-wide animate-pulse">Speaking Response...</span>}
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            {transcript ? `"${transcript}"` : "Click the microphone to speak questions directly about your files."}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Animated wave bars when listening or speaking */}
        {(isListening || isSpeaking) && (
          <div className="flex items-end gap-1 px-3 h-8">
            {[1, 2, 3, 4, 5, 2, 3, 1].map((val, idx) => (
              <span 
                key={idx} 
                className={`w-1 rounded bg-linear-to-t ${isListening ? "from-emerald-500 to-teal-400" : "from-violet-500 to-fuchsia-400"}`}
                style={{
                  height: `${val * (isListening ? 7 : 9)}px`,
                  animation: `bounce 0.6s ease-in-out infinite alternate`,
                  animationDelay: `${idx * 0.08}s`
                }}
              />
            ))}
          </div>
        )}

        <button
          onClick={toggleListening}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
            isListening 
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 scale-105" 
              : "bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
          }`}
          title="Turn on voice input"
        >
          {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          {isListening ? "Pause Mic" : "Talk to Data"}
        </button>

        <button
          onClick={toggleSpeechOutput}
          className={`p-2.5 rounded-xl border transition-all ${
            speechEnabled 
              ? "border-violet-850 bg-violet-950/20 text-violet-400 hover:bg-violet-950/30" 
              : "border-white/5 bg-white/5 text-slate-500 hover:bg-white/10"
          }`}
          title={speechEnabled ? "Mute audio response" : "Unmute audio response"}
        >
          {speechEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
