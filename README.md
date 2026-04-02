# 💰 Finance Dashboard UI

A modern, clean, and interactive **Finance Dashboard Web Application** built using React.  
This project demonstrates frontend engineering skills including UI design, state management, data visualization, and role-based UI behavior.

---

## 🚀 Live Demo
👉 https://your-app-link.vercel.app

---

## 📌 Features

### 📊 Dashboard Overview
- Summary cards:
  - Total Balance
  - Total Income
  - Total Expenses
- Monthly balance trend (Line Chart)
- Expense breakdown by category (Donut Chart)

---

### 📋 Transactions Management
- View all transactions in a clean table

**Features:**
- 🔍 Search by category
- 🔽 Filter (All / Income / Expense)
- 🔼 Sort (Date / Amount)
- 📭 Empty state handling

---

### 👤 Role-Based UI
- **Viewer:**
  - Can only view data
- **Admin:**
  - Can add, edit, and delete transactions

Role switching is implemented using a dropdown (frontend simulation).

---

### ✏️ Add & Edit Transactions
- Modal-based form
- Fields:
  - Date
  - Category
  - Amount
  - Type (Income / Expense)
- Supports:
  - Adding new transactions
  - Editing existing transactions

---

### 💡 Insights Section
- Highest spending category
- Monthly savings
- Percentage change in balance

---

### 🌙 Additional Enhancements
- Dark mode toggle
- LocalStorage persistence
- Responsive design (mobile + desktop)
- Smooth hover effects & transitions

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **State Management:** React Hooks (useState, useMemo, useEffect)

---

## 📂 Project Structure
src/
│
├── components/
│ ├── Sidebar.jsx
│ ├── Topbar.jsx
│ ├── SummaryCards.jsx
│ ├── Charts.jsx
│ ├── Transactions.jsx
│ ├── Insights.jsx
│ ├── Modal.jsx
│
├── utils/
│ ├── utils.js
│
├── App.jsx
├── main.jsx
└── index.css


---

## ⚙️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/shivamg727583/finance-dashboard.git

cd finance-dashboard


### 2. Install dependencies

npm install


### 3. Run the app

npm run dev


---

## 🧠 Approach & Thought Process

- Built a **clean and intuitive UI**
- Used **component-based architecture** for scalability
- Implemented **derived state calculations** (income, expense, balance)
- Optimized performance using `useMemo`
- Designed **role-based UI behavior without backend**
- Focused on **good UX (empty states, responsiveness, transitions)**

---

## 📈 Future Improvements

- Backend integration (Node.js / Express)
- Authentication system
- Advanced analytics (weekly/monthly trends)
- Export data (CSV / PDF)
- Pagination for large datasets

---

## 👨‍💻 Author

**Shivam Gupta**

---

## ⭐ Feedback

If you found this project useful, feel free to give it a ⭐ on GitHub!