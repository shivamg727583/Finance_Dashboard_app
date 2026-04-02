import { LayoutDashboard, Receipt, BarChart } from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const itemClass = (id) =>
    `flex items-center gap-3 p-2 rounded-lg cursor-pointer transition
     ${
       active === id
         ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-white"
         : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
     }`;

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-5">

      <h2 className="text-xl font-bold mb-8">💰 Finance</h2>

      <nav className="space-y-2 text-sm">

        <div onClick={() => scrollTo("dashboard")} className={itemClass("dashboard")}>
          <LayoutDashboard size={18} />
          Dashboard
        </div>

        <div onClick={() => scrollTo("transactions")} className={itemClass("transactions")}>
          <Receipt size={18} />
          Transactions
        </div>

        <div onClick={() => scrollTo("insights")} className={itemClass("insights")}>
          <BarChart size={18} />
          Insights
        </div>

      </nav>
    </aside>
  );
}

export default Sidebar;