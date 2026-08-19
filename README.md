# 🏛️ People Priorities

> **AI-Powered Constituency Intelligence Platform for Smart Governance**

People Priorities transforms citizen complaints into **actionable insights for smarter governance** using AI, analytics, and geospatial intelligence.

## ✨ Features

* 👥 **Citizen Complaint Portal** — Submit complaints with text, images, voice, and location.
* 🤖 **AI Complaint Analysis** — Summarization, categorization, priority, and severity detection.
* 📊 **Command Center** — Real-time KPIs, trends, department analytics, and AI insights.
* 🗺️ **Intelligence Map** — Complaint hotspots, heatmaps, filters, and location-based analysis.
* 💡 **AI Recommendations** — Development priorities, budget estimation, scheme mapping, and action plans.
* 🏗️ **Project Monitoring** — Track projects, budgets, milestones, departments, and progress.

## 🛠️ Tech Stack

| Frontend     | Backend   | AI                 | Database |
| ------------ | --------- | ------------------ | -------- |
| Next.js 16   | FastAPI   | Google Gemini      | MongoDB  |
| React 19     | Python    | Prompt Engineering | Motor    |
| TypeScript   | Pydantic  | AI Recommendations |          |
| Tailwind CSS | REST APIs |                    |          |

**Other:** React Query · React Hook Form · Zod · Recharts · React Leaflet · Framer Motion

## 🏗️ Architecture

```text
Citizen
   ↓
Complaint Portal
   ↓
FastAPI Backend
   ↓
┌──────────────┬──────────────┐
│  Gemini AI   │   MongoDB    │
└──────────────┴──────────────┘
          ↓
Analytics & Intelligence
          ↓
Command Center
          ↓
Maps & Recommendations
```

## 🚀 Getting Started

```bash
git clone https://github.com/rheaadotcom/people-priorities.git
cd people-priorities
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python run.py
```

Create `backend/.env`:

```env
MONGODB_URL=your_mongodb_url
DATABASE_NAME=people_priorities
GEMINI_API_KEY=your_gemini_api_key
```

## 📌 Roadmap

* 🔐 Authentication & Role-Based Access
* 🌐 Multi-language Support
* 🔔 Real-time Notifications
* 🤖 AI Chat Assistant
* 📈 Predictive Analytics
* 📍 Advanced GIS Intelligence
* 📱 Offline Complaint Submission

## 🤝 Contributing

Contributions are welcome! Fork the repository, create a feature branch, make your changes, and open a Pull Request.

---

> **From citizen complaints to intelligent governance. 🏛️🤖**
