import { Pencil, Plus, Trash2, Search } from "lucide-react";

const Transactions = ({
  data = [],
  role,
  onAdd,
  onDelete,
  onEdit,
  search,
  setSearch,
  filter,
  setFilter,
  sort,          
  setSort        
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 mb-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        
        {/* 🔍 Search */}
        <div className="relative w-full md:w-1/3">
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

      
        <div className="flex gap-2 items-center flex-wrap">

          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none dark:text-gray-200"
          >
            <option value="all" className="dark:bg-gray-800 dark:text-gray-300">All</option>
            <option value="income" className="dark:bg-gray-800 dark:text-gray-300">Income</option>
            <option value="expense" className="dark:bg-gray-800 dark:text-gray-300">Expense</option>
          </select>

          {/* ✅ NEW SORT (UI MATCHED) */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none dark:text-gray-200"
          >
            <option value="date" className="dark:bg-gray-800 dark:text-gray-300">
              Sort by Date
            </option>
            <option value="amount" className="dark:bg-gray-800 dark:text-gray-300">
              Sort by Amount
            </option>
          </select>

          {/* Add Button */}
          {role === "admin" && (
            <button
              onClick={onAdd}
              className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              <Plus size={16} />
              Add
            </button>
          )}
        </div>
      </div>

      {/* 📭 Empty State */}
      {data.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <p>No transactions found</p>
        </div>
      ) : (

        /* 📊 Table */
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            
            {/* Header */}
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Category</th>
                <th className="py-2">Type</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-3">{t.date}</td>

                  <td
                    className={`py-3 font-medium ${
                      t.type === "income"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    ₹{t.amount.toLocaleString()}
                  </td>

                  <td className="py-3">{t.category}</td>

                  <td className="py-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        t.type === "income"
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>

                  <td className="py-3 text-right">
                    {role === "admin" && (
                      <div className="flex justify-end gap-2">
                        
                        <button
                          onClick={() => onEdit(t)}
                          className="p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          onClick={() => onDelete(t.id)}
                          className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition"
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default Transactions;