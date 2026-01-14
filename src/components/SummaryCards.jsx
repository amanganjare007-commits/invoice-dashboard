import { useInvoices } from "../context/InvoiceContext";
import { useMemo } from "react";

export default function SummaryCards() {
  const { invoices } = useInvoices();

  const summary = useMemo(() => {
    const outstanding = invoices
      .filter((i) => i.status !== "paid")
      .reduce((a, b) => a + b.amount, 0);

    const overdue = invoices
      .filter((i) => i.status === "overdue")
      .reduce((a, b) => a + b.amount, 0);

    const paidThisMonth = invoices.filter((i) => {
      if (!i.paymentDate) return false;
      const d = new Date(i.paymentDate);
      const n = new Date();
      return d.getMonth() === n.getMonth();
    }).reduce((a, b) => a + b.amount, 0);

    const paidInvoices = invoices.filter((i) => i.paymentDate);
    const avgDelay =
      paidInvoices.reduce((sum, i) => {
        const diff =
          (new Date(i.paymentDate) - new Date(i.dueDate)) /
          (1000 * 60 * 60 * 24);
        return sum + diff;
      }, 0) / (paidInvoices.length || 1);

    return { outstanding, overdue, paidThisMonth, avgDelay };
  }, [invoices]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {Object.entries(summary).map(([key, value]) => (
        <div key={key} className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 capitalize">{key}</p>
          <h2 className="text-xl font-bold">
            {key === "avgDelay"
              ? value.toFixed(1) + " days"
              : "₹" + value}
          </h2>
        </div>
      ))}
    </div>
  );
}
