import SummaryCards from "./SummaryCards";
import InvoiceTable from "./InvoiceTable";
import AddInvoiceModal from "./AddInvoiceModal";
import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Invoice Dashboard</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Invoice
        </button>
      </div>

      <SummaryCards />
      <InvoiceTable />
      {open && <AddInvoiceModal onClose={() => setOpen(false)} />}
    </div>
  );
}
