import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

const Card = ({ title, value, type }) => {
  const config = {
    balance: {
      icon: <Wallet />,
      color: "text-indigo-600",
      bg: "bg-indigo-100 dark:bg-indigo-900"
    },
    income: {
      icon: <TrendingUp />,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900"
    },
    expense: {
      icon: <TrendingDown />,
      color: "text-red-500",
      bg: "bg-red-100 dark:bg-red-900"
    }
  };

  const c = config[type] || config.balance;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 hover:shadow-lg transition">
      
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${c.bg}`}>
          <div className={c.color}>{c.icon}</div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      </div>

      <h2 className={`text-2xl font-semibold ${c.color}`}>
        ₹{value.toLocaleString()}
      </h2>
    </div>
  );
};

export default Card;