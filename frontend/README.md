# AI Employee Performance System

A full-stack MERN application with AI-powered employee performance recommendations.

---

## 🚀 Features

- Employee Management
- JWT Authentication
- AI Recommendations using OpenRouter
- MongoDB Atlas Integration
- Search Employees
- Professional Responsive UI
- REST APIs
- React Frontend
- Express Backend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### AI Integration
- OpenRouter API

---

## 📂 Project Structure

```
ESE_FSD/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## 🔐 Environment Variables

Create `.env` inside backend folder:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

OPENROUTER_API_KEY=YOUR_API_KEY
```

---

## ▶️ Run Backend

```bash
cd backend
npm install
npm run dev
```

---

## ▶️ Run Frontend

```bash
cd frontend
npm install
npm start
```

---

## 📸 Screenshots

- Login Page
- Employee Dashboard
- AI Recommendation System
- MongoDB Atlas
- Thunder Client APIs

---

## 🌐 APIs

### Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`

### Employees
- GET `/api/employees`
- POST `/api/employees`
- DELETE `/api/employees/:id`

### AI
- POST `/api/ai/recommend`

---

## 🤖 AI Recommendation System

The project uses OpenRouter AI models to:
- Analyze employee performance
- Suggest improvements
- Recommend training
- Provide role recommendations

---

## 📌 Future Improvements

- Charts & Analytics
- Dark/Light Mode
- Employee Update Feature
- Admin Dashboard
- Cloud Deployment

---

## 👨‍💻 Author

Arpit
