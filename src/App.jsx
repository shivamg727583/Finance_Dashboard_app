import { useEffect, useMemo, useState } from "react";
import { expenseByCategory, groupByMonth } from "./utils/utils";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Transactions from "./components/Transaction";
import Insights from "./components/Insights";
import Modal from "./components/Modal";
import SplashScreen from "./components/SplashScreen";

const seed = [
  { id: 1, date: "2026-01-12", amount: 2500, category: "Food", type: "expense" },
  { id: 2, date: "2026-01-28", amount: 15000, category: "Salary", type: "income" },
  { id: 3, date: "2026-02-05", amount: 3000, category: "Travel", type: "expense" },
  { id: 4, date: "2026-02-22", amount: 8000, category: "Shopping", type: "expense" },
  { id: 5, date: "2026-03-03", amount: 12000, category: "Salary", type: "income" },
  { id: 6, date: "2026-03-10", amount: 4200, category: "Food", type: "expense" }
];

export default function App() {

  const [transactions, setTransactions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("txns")) || seed;
    } catch {
      return seed;
    }
  });

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date"); 
  const [dark, setDark] = useState(false);
  const [editing, setEditing] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);


  useEffect(() => {
  const timer = setTimeout(() => {
    setInitialLoading(false);
  }, 1200); // 1.2 sec perfect

  return () => clearTimeout(timer);
}, []);



  useEffect(() => {
    localStorage.setItem("txns", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  
  const processed = useMemo(() => {
    let data = transactions
      .filter(t => filter === "all" || t.type === filter)
      .filter(t =>
        t.category.toLowerCase().includes(search.toLowerCase())
      );

    data = [...data].sort((a, b) => {
      if (sort === "amount") return b.amount - a.amount;
      return new Date(b.date) - new Date(a.date);
    });

    return data;
  }, [transactions, search, filter, sort]);

  const income = useMemo(
    () => transactions
      .filter(t => t.type === "income")
      .reduce((a, b) => a + b.amount, 0),
    [transactions]
  );

  const expense = useMemo(
    () => transactions
      .filter(t => t.type === "expense")
      .reduce((a, b) => a + b.amount, 0),
    [transactions]
  );

  const balance = income - expense;

  const monthly = useMemo(() => groupByMonth(transactions), [transactions]);
  const categories = useMemo(() => expenseByCategory(transactions), [transactions]);

  
  const openAdd = () => {
    setEditing({
      date: new Date().toISOString().split("T")[0],
      category: "",
      amount: "",
      type: "expense"
    });
  };

  const deleteTxn = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

 
  const saveEdit = () => {
    if (editing.id) {
     
      setTransactions(prev =>
        prev.map(t => (t.id === editing.id ? editing : t))
      );
    } else {
      
      setTransactions(prev => [
        ...prev,
        { ...editing, id: Date.now() }
      ]);
    }
    setEditing(null);
  };


  if (initialLoading) {
  return <SplashScreen />;
}

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">

      <Sidebar />

      <main className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">

        <section id='dashboard'>
          <Topbar
            role={role}
            setRole={setRole}
            dark={dark}
            setDark={setDark}
          />

          <SummaryCards
            income={income}
            expense={expense}
            balance={balance}
          />

          {monthly.length > 0 && categories.length > 0 && (
            <Charts monthly={monthly} categories={categories} />
          )}
        </section>

        <section id="transactions">
          <Transactions
            data={processed} 
            role={role}
            onAdd={openAdd} 
            onDelete={deleteTxn}
            onEdit={setEditing}
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            sort={sort}       
            setSort={setSort} 
          />
        </section>

        <section id='insights'>
          <Insights
            categories={categories}
            balance={balance}
            monthly={monthly}
          />
        </section>

      </main>

   
      <Modal
        open={!!editing}
        form={editing || {}}
        setForm={setEditing}
        onClose={() => setEditing(null)}
        onSave={saveEdit}
      />
    </div>
  );
}