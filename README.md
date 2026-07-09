# 🏛️ People Priorities

> **AI-Powered Constituency Intelligence Platform for Smart Governance**

People Priorities is an intelligent constituency management platform that empowers government officials to analyze citizen complaints, identify development priorities, monitor ongoing projects, and make data-driven decisions using Artificial Intelligence.

The platform combines AI, interactive analytics, geospatial intelligence, and citizen engagement to transform raw public feedback into actionable insights that improve governance, transparency, and public service delivery.

---

# 🌟 Why People Priorities?

Government officials often receive thousands of complaints across different departments, making it difficult to identify urgent issues and allocate resources efficiently.

People Priorities addresses this challenge by leveraging Artificial Intelligence to:

- 📌 Analyze complaint patterns
- 🤖 Detect urgent and high-impact issues
- 📊 Generate actionable development insights
- 🗺️ Visualize complaint hotspots
- 🏗️ Prioritize development projects
- 💰 Assist in smarter budget planning
- 🤝 Improve citizen engagement and transparency

---

# 🚀 Key Features

## 👥 Citizen Complaint Portal

- Multi-step complaint submission
- Category-based complaint registration
- Image upload support
- Voice complaint upload
- Interactive map-based location picker
- Review & confirmation screen
- AI-powered complaint analysis

---

## 📊 Command Center Dashboard

- Real-time constituency analytics
- KPI cards
- Complaint trend analysis
- Interactive charts
- Heatmaps
- Department-wise statistics
- AI-powered insights
- AI Copilot panel

---

## 🗺️ Intelligence Map

- Interactive constituency map
- Complaint hotspot visualization
- Category-based filters
- Smart search
- Heatmap analytics
- Priority indicators

---

## 🤖 AI Recommendation Engine

Generate AI-powered recommendations including:

- Development priorities
- Severity prediction
- Budget estimation
- Government scheme alignment
- Confidence scores
- AI reasoning
- Suggested action plans

---

## 🏗️ Project Monitoring

Track ongoing development projects through:

- Progress tracking
- Budget utilization
- Department ownership
- Timeline monitoring
- Milestone management
- AI priority scoring

---

# 🧠 AI Capabilities

People Priorities integrates Google Gemini AI to provide intelligent decision support.

### AI Features

- Complaint Summarization
- Smart Complaint Categorization
- Priority Detection
- Severity Prediction
- Development Recommendation Generation
- Budget Estimation
- Government Scheme Mapping
- Constituency Trend Analysis
- Decision Support Intelligence

---

# 🛠 Tech Stack

| Frontend | Backend | AI | Database |
|----------|----------|-----|-----------|
| Next.js 16 | FastAPI | Google Gemini AI | MongoDB |
| React 19 | Python | Prompt Engineering | Motor |
| TypeScript | Pydantic | AI Recommendations | |
| Tailwind CSS | REST APIs | | |
| React Query | | | |
| React Hook Form | | | |
| Zod | | | |
| Recharts | | | |
| React Leaflet | | | |
| Framer Motion | | | |

---

# 🏗 System Architecture

```text
                 Citizen
                    │
                    ▼
        Complaint Submission Portal
                    │
                    ▼
              FastAPI Backend
                    │
      ┌─────────────┴─────────────┐
      ▼                           ▼
 Google Gemini AI           MongoDB Database
      │                           │
      └─────────────┬─────────────┘
                    ▼
         Analytics & Intelligence
                    │
                    ▼
        Command Center Dashboard
                    │
                    ▼
      AI Recommendations & Maps
```

---

# 📂 Project Structure

```text
people-priorities/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── uploads/
│   ├── requirements.txt
│   └── run.py
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/rheaadotcom/people-priorities.git

cd people-priorities
```

---

# 💻 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

# ⚙️ Backend Setup

Create a virtual environment

```bash
cd backend

python -m venv venv
```

### Activate Environment

**Windows**

```bash
venv\Scripts\activate
```

**Linux/macOS**

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
MONGODB_URL=your_mongodb_url

DATABASE_NAME=people_priorities

GEMINI_API_KEY=your_api_key
```

Run the backend

```bash
python run.py
```

Backend:

```
http://localhost:8000
```

Swagger Documentation:

```
http://localhost:8000/docs
```

---

# 🔌 API Modules

- Citizen Complaint Management
- AI Complaint Analysis
- Dashboard Analytics
- Recommendation Engine
- Intelligence Maps
- Development Project Monitoring

---

# 📸 Screenshots

- 🏠 Landing Page
- 👥 Citizen Complaint Portal
- 📊 Command Center Dashboard
- 🗺️ Intelligence Map
- 🤖 AI Recommendation Panel
- 🏗️ Project Monitoring
- 📈 Analytics Dashboard

---

# 🌍 Deployment

## Frontend

- Vercel

## Backend

- Render

---

# 🔒 Security

- Environment Variable Protection
- Secure API Architecture
- Type-safe Validation using Zod & Pydantic
- Secure File Uploads
- MongoDB Injection Protection
- Error Handling & Validation

---

# 🚀 Future Roadmap

- 🔐 Authentication & Authorization
- 👥 Role-Based Dashboards
- 📱 Mobile Application
- 🌐 Multi-language Support
- 🔔 Real-time Notifications
- 🤖 AI Chatbot Assistant
- 📈 Predictive Analytics
- 📊 Constituency Performance Reports
- ☁️ Cloud Storage Integration
- 📡 Offline Complaint Submission

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 🚀 Future Enhancements

We plan to add the following features in future releases:

- 🔐 User Authentication & Authorization
- 👥 Role-Based Dashboards (Admin, Citizen, Officer)
- 🔔 Real-time Notifications
- 🤖 AI-powered Chat Assistant
- 🌐 Multi-language Support
- 📱 Offline Complaint Submission
- 📊 Predictive Analytics & Smart Reports
- 📍 GIS-based Issue Tracking
- 📈 Advanced Data Visualization
- ☁️ Cloud Deployment & Scalability

---

# 👨‍💻 Team

## 🛡️ Team Knightshooks

This project was designed and developed by **Team Knightshooks** with the vision of building an AI-powered Constituency Intelligence Platform that enables smarter governance, geospatial analytics, and citizen engagement.

---

# 🙏 Acknowledgements

Special thanks to everyone who supported and inspired this project.

Built with ❤️ by **Team Knightshooks** to empower data-driven governance through Artificial Intelligence.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ⭐ Support

If you found this project useful, please consider giving this repository a **⭐ Star** on GitHub.

Your support motivates us to continue improving and adding new features.

---

## 💙 Show Your Support

⭐ **Star this repository** if you like the project.

🍴 **Fork it** to contribute or build upon it.

📝 **Open an Issue** if you find bugs or have suggestions.

🚀 **Contributions are always welcome!**