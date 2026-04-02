import Card from "./Card";

const SummaryCards = ({ income, expense, balance }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    <Card title="Total Balance" value={balance} type="balance" />
    <Card title="Income" value={income} type="income" />
    <Card title="Expenses" value={expense} type="expense" />
  </div>
);

export default SummaryCards;