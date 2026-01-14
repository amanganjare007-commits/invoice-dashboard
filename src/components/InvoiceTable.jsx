import { useInvoices } from "../context/InvoiceContext";
import { daysInfo } from "../utils/dateUtils";

export default function InvoiceTable() {
  const { invoices, markAsPaid } = useInvoices();

  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Invoice</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Info</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-t text-center">
              <td className="p-2">{inv.id}</td>
              <td>{inv.customerName}</td>
              <td>₹{inv.amount}</td>
              <td
                className={
                  inv.status === "overdue"
                    ? "text-red-600"
                    : inv.status === "paid"
                    ? "text-green-600"
                    : "text-yellow-600"
                }
              >
                {inv.status}
              </td>
              <td>{daysInfo(inv)}</td>
              <td>
                {inv.status !== "paid" && (
                  <button
                    onClick={() => markAsPaid(inv.id)}
                    className="text-blue-600 underline"
                  >
                    Mark Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
