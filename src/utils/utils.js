export const monthKey = (d) => new Date(d).toLocaleString("en-US", { month: "short" });

export const groupByMonth = (tx) => {
  const map = {};
  tx.forEach(t => {
    const m = monthKey(t.date);
    if (!map[m]) map[m] = { month: m, income: 0, expense: 0 };
    map[m][t.type] += t.amount;
  });
  return Object.values(map).map(x => ({ ...x, balance: x.income - x.expense }));
};

export const expenseByCategory = (tx) => {
  const map = {};
  tx.forEach(t => {
    if (t.type === "expense") map[t.category] = (map[t.category] || 0) + t.amount;
  });
  return Object.entries(map).map(([name, value]) => ({ name, value }));
};
