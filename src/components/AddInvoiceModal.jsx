import { useState } from "react";
import { useInvoices } from "../context/InvoiceContext";

export default function AddInvoiceModal({ onClose }) {
  const { addInvoice } = useInvoices();
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [terms, setTerms] = useState(30);

  const submit = () => {
    if (!customerName || amount <= 0 || !invoiceDate) {
      alert("Invalid data");
      return;
    }

    const due = new Date(invoiceDate);
    due.setDate(due.getDate() + Number(terms));

    addInvoice({
      id: "INV-" + Date.now(),
      customerName,
      amount: Number(amount),
      invoiceDate,
      paymentTerms: terms,
      dueDate: due.toISOString().split("T")[0],
      paymentDate: null,
      status: "pending",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="font-bold mb-4">Add Invoice</h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Customer Name"
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <input
          type="number"
          className="border p-2 w-full mb-2"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 w-full mb-2"
          onChange={(e) => setInvoiceDate(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-4"
          onChange={(e) => setTerms(e.target.value)}
        >
          {[7, 15, 30, 45, 60].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button onClick={submit} className="bg-blue-600 text-white px-4 py-1">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
