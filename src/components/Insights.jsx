import { TrendingUp, TrendingDown, Wallet, PieChart } from "lucide-react";

const Insights = ({ categories = [], balance = 0, monthly = [] }) => {
  const top = [...categories].sort((a, b) => b.value - a.value)[0];
  const last = monthly.at(-1);
  const prev = monthly.at(-2);

  const change =
    prev && prev.balance !== 0
      ? (((last.balance - prev.balance) / prev.balance) * 100).toFixed(1)
      : 0;

  const isPositive = change >= 0;

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">

  
      <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
            <PieChart className="text-indigo-600 dark:text-indigo-300" size={20} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Top Spending</p>
        </div>
        <h2 className="text-xl font-semibold">
          {top?.name || "—"}
        </h2>
      </div>

   
      <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <Wallet className="text-green-600 dark:text-green-300" size={20} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Savings</p>
        </div>
        <h2 className="text-xl font-semibold">
          ₹{balance.toLocaleString()}
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`p-2 rounded-lg ${
              isPositive
                ? "bg-green-100 dark:bg-green-900"
                : "bg-red-100 dark:bg-red-900"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="text-green-600 dark:text-green-300" size={20} />
            ) : (
              <TrendingDown className="text-red-600 dark:text-red-300" size={20} />
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Change</p>
        </div>
        <h2
          className={`text-xl font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}%
        </h2>
      </div>

    </div>
  );
};

export default Insights;