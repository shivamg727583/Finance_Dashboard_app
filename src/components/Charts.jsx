import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid
} from "recharts";

const Charts = ({ monthly = [], categories = [] }) => {
  const COLORS = ["#6366F1", "#22C55E", "#EF4444", "#F59E0B"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

      {/* 📈 Line Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 hover:shadow-lg transition">
        
        <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Monthly Balance
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={monthly}>

            {/* Gradient */}
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

            <XAxis 
              dataKey="month" 
              tick={{ fill: "#9CA3AF", fontSize: 12 }} 
            />
            <YAxis 
              tick={{ fill: "#9CA3AF", fontSize: 12 }} 
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "8px",
                color: "#fff"
              }}
            />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              fill="url(#colorBalance)"
              animationDuration={800}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🥧 Pie Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 hover:shadow-lg transition">

        <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Expense Breakdown
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>

            <Pie
              data={categories}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              innerRadius={50}   // 🔥 donut style
              paddingAngle={3}
              animationDuration={800}
            >
              {categories.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "8px",
                color: "#fff"
              }}
            />

            <Legend
              iconType="circle"
              wrapperStyle={{
                fontSize: "12px"
              }}
            />

          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;