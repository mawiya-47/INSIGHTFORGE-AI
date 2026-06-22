<div align="center">

```
██╗███╗   ██╗███████╗██╗ ██████╗ ██╗  ██╗████████╗███████╗ ██████╗ ██████╗  ██████╗ ███████╗     █████╗ ██╗
██║████╗  ██║██╔════╝██║██╔════╝ ██║  ██║╚══██╔══╝██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝    ██╔══██╗██║
██║██╔██╗ ██║███████╗██║██║  ███╗███████║   ██║   █████╗  ██║   ██║██████╔╝██║  ███╗█████╗      ███████║██║
██║██║╚██╗██║╚════██║██║██║   ██║██╔══██║   ██║   ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝      ██╔══██║██║
██║██║ ╚████║███████║██║╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗    ██║  ██║██║
╚═╝╚═╝  ╚═══╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝  ╚═╝ ╚═╝
```

### 🔮 Enterprise-Grade Multi-Modal AI Data Analysis Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Gemini](https://img.shields.io/badge/Gemini_2.0_Flash-AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 🚀 What is InsightForge AI?

> **InsightForge AI** is a next-generation, enterprise-grade platform that transforms raw data into actionable intelligence — powered by Google Gemini 2.0 Flash with multi-modal reasoning across CSV, PDF, images, and text.

Upload any dataset. Talk to your data. Get instant charts, forecasts, SQL queries, and executive reports — all in one sleek interface.

---

## ✨ Features

```
┌─────────────────────────────────────────────────────────────────┐
│                     🤖 AI AGENTS SUITE                          │
├─────────────────┬───────────────────────────────────────────────┤
│ 🧹 Data Cleaner │  Detects anomalies, nulls & duplicates        │
│ 📊 Visualizer   │  Auto-generates Recharts from your data       │
│ 🔮 Forecaster   │  XGBoost/Prophet-style multi-period forecasts │
│ 📝 Reporter     │  Executive summaries & SWOT analysis          │
│ 🗄️  SQL Agent   │  Natural language → PostgreSQL queries        │
│ 📈 Analyst      │  Correlations, benchmarks & recommendations   │
└─────────────────┴───────────────────────────────────────────────┘
```

- 🎙️ **Voice Assistant** — Talk to your data using Web Speech API
- 📁 **Multi-Modal Uploads** — CSV, PDF, Images, plain text
- ⚡ **Real-time Streaming** — Live Vite HMR dev environment
- 🎨 **Dark UI** — Glassmorphism design with Tailwind CSS v4
- 🔒 **Secure** — API keys via `.env`, never exposed to client

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + TypeScript + Vite 6 |
| Styling | Tailwind CSS v4 + Motion |
| Charts | Recharts 3 |
| Icons | Lucide React |
| Backend | Express.js + tsx |
| AI Engine | Google Gemini 2.0 Flash (`@google/genai`) |
| Runtime | Node.js (ESM) |

---

## ⚙️ Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/mawiya-47/INSIGHTFORGE-AI.git
cd INSIGHTFORGE-AI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

```bash
# Create .env file
cp .env.example .env
```

Add your Gemini API key inside `.env`:

```env
GEMINI_API_KEY="your_gemini_api_key_here"
```

> 🔑 Get your free API key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

### 4. Run the app

```bash
node --import tsx/esm server.ts
```

Open **http://localhost:3000** 🎉

---

## 📁 Project Structure

```
insightforge-ai/
├── 📄 server.ts              # Express + Vite dev server
├── 📄 index.html             # App entry point
├── 📄 vite.config.ts         # Vite configuration
├── 📄 tsconfig.json          # TypeScript config
├── src/
│   ├── 📄 App.tsx            # Main application (1700+ lines)
│   ├── 📄 types.ts           # TypeScript interfaces
│   ├── 📄 sampleProjects.ts  # Demo datasets
│   ├── 📄 index.css          # Global styles
│   ├── 📄 main.tsx           # React entry
│   └── components/
│       ├── 🎙️ VoiceAssistant.tsx   # Voice AI component
│       └── 📊 WidgetGrid.tsx        # Dashboard grid
└── 📄 .env                   # API keys (git-ignored)
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/analyze` | Multi-modal AI analysis |
| `POST` | `/api/nl-to-sql` | Natural language → SQL |

---

## 🤝 Contributing

```bash
# Fork & clone
git clone https://github.com/YOUR_USERNAME/INSIGHTFORGE-AI.git

# Create branch
git checkout -b feature/amazing-feature

# Commit changes
git commit -m "Add amazing feature"

# Push & open PR
git push origin feature/amazing-feature
```

---

## ⚠️ Important Notes

- Never commit your `.env` file — it's git-ignored by default
- Free Gemini API tier has rate limits — upgrade at [ai.google.dev](https://ai.google.dev)
- Use `node --import tsx/esm server.ts` to run (not `npm run dev`)

---

<div align="center">

**Built with ❤️ by [mawiya-47](https://github.com/mawiya-47)**

⭐ Star this repo if you found it useful!

</div>
