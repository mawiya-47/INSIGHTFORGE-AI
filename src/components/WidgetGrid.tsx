import React from "react";
import { ArrowUp, ArrowDown, Eye, EyeOff, LayoutGrid, Maximize, Minimize2, Trash } from "lucide-react";
import { DragWidget } from "../types";

interface WidgetGridProps {
  widgets: DragWidget[];
  onUpdateWidgets: (updated: DragWidget[]) => void;
  renderWidgetContent: (type: DragWidget["type"]) => React.ReactNode;
}

export default function WidgetGrid({ widgets, onUpdateWidgets, renderWidgetContent }: WidgetGridProps) {
  
  const moveWidget = (index: number, direction: "up" | "down") => {
    const updated = [...widgets];
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= widgets.length) return;
    
    // Swap
    const temp = updated[index];
    updated[index] = updated[targetIdx];
    updated[targetIdx] = temp;
    onUpdateWidgets(updated);
  };

  const toggleVisibility = (id: string) => {
    const updated = widgets.map((w) => (w.id === id ? { ...w, visible: !w.visible } : w));
    onUpdateWidgets(updated);
  };

  const cycleSize = (id: string) => {
    const sizes: DragWidget["size"][] = ["small", "medium", "large"];
    const updated = widgets.map((w) => {
      if (w.id === id) {
        const currentIdx = sizes.indexOf(w.size);
        const nextIdx = (currentIdx + 1) % sizes.length;
        return { ...w, size: sizes[nextIdx] };
      }
      return w;
    });
    onUpdateWidgets(updated);
  };

  const getGridSpan = (size: DragWidget["size"]) => {
    switch (size) {
      case "small":
        return "col-span-12 md:col-span-4";
      case "medium":
        return "col-span-12 md:col-span-6";
      case "large":
        return "col-span-12";
      default:
        return "col-span-12 md:col-span-6";
    }
  };

  return (
    <div className="space-y-6">
      {/* Widget Control Bar */}
      <div className="glass rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <LayoutGrid className="text-violet-400 h-5 w-5" />
          <span className="text-sm font-medium text-slate-250 font-display">Bento Dashboard Builder (Custom Layout Designer)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {widgets.map((widget) => (
            <button
               key={widget.id}
               onClick={() => toggleVisibility(widget.id)}
               className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                 widget.visible
                   ? "bg-violet-950/20 border-violet-850/60 text-violet-300"
                   : "bg-white/5 border-white/5 text-slate-500 line-through"
               }`}
            >
              {widget.visible ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
              {widget.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Widgets */}
      <div className="grid grid-cols-12 gap-5">
        {widgets
          .filter((w) => w.visible)
          .map((widget, index) => {
            const gridSpan = getGridSpan(widget.size);
            return (
              <div
                key={widget.id}
                className={`${gridSpan} glass rounded-2xl flex flex-col hover:border-white/15 transition-all duration-300 shadow-md relative`}
              >
                {/* Header operations bar */}
                <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between gap-2 bg-white/1 rounded-t-2xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{widget.title}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => moveWidget(index, "up")}
                      disabled={index === 0}
                      className="p-1 text-slate-500 hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move Up priority"
                    >
                      <ArrowUp className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => moveWidget(index, "down")}
                      disabled={index === widgets.length - 1}
                      className="p-1 text-slate-500 hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move Down priority"
                    >
                      <ArrowDown className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => cycleSize(widget.id)}
                      className="p-1 text-slate-500 hover:text-violet-400"
                      title={`Resize: Currently ${widget.size}`}
                    >
                      {widget.size === "large" ? (
                        <Minimize2 className="h-3.5 w-3.5" />
                      ) : (
                        <Maximize className="h-3.5 w-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => toggleVisibility(widget.id)}
                      className="p-1 text-slate-500 hover:text-rose-400"
                      title="Hide from view"
                    >
                      <EyeOff className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content body wrapper */}
                <div className="p-5 flex-1 select-text">
                  {renderWidgetContent(widget.type)}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
