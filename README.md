# invoice-dashboard
# MSME Invoice Management Dashboard
 This project is built using React and Tailwind CSS.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## MSME Invoice Management Dashboard

A React-based invoice management dashboard built as part of the **QistonPe Front-End Developer Intern Assignment**.  
This application helps MSME business owners track invoices, payments, and cash flow at a glance.

---

## 🚀 Live Demo 
Example: https://invoice-dashboard.netlify.app
> https://app.netlify.com/projects/precious-sherbet-a460e9/
---

## 🧰 Tech Stack

- **React.js** (Vite)
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **LocalStorage** (for data persistence)

---

## 📌 Features

### 1. Invoice List View
- Displays invoices with:
  - Invoice Number
  - Customer Name
  - Invoice Date
  - Due Date
  - Amount
  - Status (Paid / Pending / Overdue)
  - Days until due / Days overdue
- Status-based color indicators
- Real-time updates

---

### 2. Summary Cards
- **Total Outstanding** (Pending + Overdue)
- **Total Overdue**
- **Total Paid (This Month)**
- **Average Payment Delay**
- Automatically updates when:
  - New invoice is added
  - Invoice is marked as paid

---

### 3. Add New Invoice
- Modal-based form
- Required fields:
  - Customer Name
  - Invoice Amount
  - Invoice Date
  - Payment Terms (7 / 15 / 30 / 45 / 60 days)
- Auto-calculates due date
- Input validation

---

### 4. Payment Action
- Mark Pending / Overdue invoices as **Paid**
- Automatically captures payment date (today)
- Updates status and summaries instantly

---

## 🧠 Business Logic

### Invoice Status Logic
- **Paid** → Payment date exists
- **Overdue** → No payment date & due date < today
- **Pending** → No payment date & due date ≥ today

### Days Calculation
- Pending → `Due in X days`
- Overdue → `Overdue by X days`
- Paid → `Paid X days early / late`

---

## ⚡ Performance Optimizations

- `useMemo` for:
  - Summary calculations
  - Expensive derived data
- `useCallback` for event handlers
- Context API to avoid prop drilling
- Efficient re-renders
- Scalable component structure

---

## 💾 Data Persistence

- Invoice data stored in **localStorage**
- Data persists across page refreshes
- Initial load includes sample invoices

---

## 📁 Project Structure
   
     src/
├── components/
│ ├── Dashboard.jsx
│ ├── SummaryCards.jsx
│ ├── InvoiceTable.jsx
│ └── AddInvoiceModal.jsx
│
├── context/
│ └── InvoiceContext.jsx
│
├── utils/
│ ├── dateUtils.js
│ └── sampleData.js
│
├── App.jsx
├── main.jsx
└── index.css

