# ToDoos

ToDoos is a task management application built with **React** and **React Router DOM**, featuring a modern dark UI theme.

## 📌 Features
- Task listing with filters (All, Today, Upcoming, Completed)
- Task creation and editing
- Dark mode UI with Tailwind CSS
- Navigation using React Router

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh

cd TaskFlow
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app will be available at: `http://localhost:5173`

---

## 📂 Folder Structure
```
TaskFlow/
│── src/
│   ├── components/               # Reusable UI components
│   │   ├── TaskAddComponents.jsx/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── TaskFilter.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   ├── pages/                     # Page components
│   │   ├── Landing.jsx
│   │   ├── Dashboard.jsx
│   │   ├── TaskListPage.jsx
│   │   ├── EditTask.jsx
│   ├── App.jsx                    # Root component with routing
│   ├── main.jsx                    # React entry point
│── public/
│── package.json
│── README.md
│── tailwind.config.js
│── vite.config.js
```

---