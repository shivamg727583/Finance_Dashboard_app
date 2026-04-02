import { Moon, Sun, Shield, User } from "lucide-react";

function Topbar({ role, setRole, dark, setDark }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

  
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Finance Dashboard
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Manage your income & expenses
        </p>
      </div>

      <div className="flex items-center gap-3">

        
        <button
          onClick={() => setDark(!dark)}
          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 
                     hover:bg-gray-200 dark:hover:bg-gray-700 
                     transition-all duration-200 shadow-sm"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="flex items-center gap-2 px-3 py-2 rounded-xl 
                        bg-gray-100 dark:bg-gray-800 
                        shadow-sm border border-gray-200 dark:border-gray-700">

          <div className="text-indigo-500">
            {role === "admin" ? <Shield size={18} /> : <User size={18} />}
          </div>

      
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-transparent outline-none text-sm 
                       text-gray-700 dark:text-gray-100 
                       cursor-pointer"
          >
            <option value="viewer"  className="dark:text-gray-100 dark:bg-gray-800 p-2 rounded-md">Viewer</option>
            <option value="admin" className="dark:text-gray-100 dark:bg-gray-800 p-2 rounded-md">Admin</option>
          </select>
        </div>

      </div>
    </div>
  );
}


export default Topbar;