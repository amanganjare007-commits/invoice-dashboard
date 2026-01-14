const sampleInvoices = [
  {
    id: "INV-001",
    customerName: "Acme Manufacturing Ltd",
    amount: 45000,
    invoiceDate: "2024-01-15",
    paymentTerms: 30,
    dueDate: "2024-02-14",
    paymentDate: null,
    status: "overdue",
  },
  {
    id: "INV-002",
    customerName: "Bright Traders",
    amount: 22000,
    invoiceDate: "2024-02-01",
    paymentTerms: 15,
    dueDate: "2024-02-16",
    paymentDate: "2024-02-14",
    status: "paid",
  },
  {
    id: "INV-003",
    customerName: "Zenith Corp",
    amount: 78000,
    invoiceDate: "2024-02-10",
    paymentTerms: 30,
    dueDate: "2024-03-11",
    paymentDate: null,
    status: "pending",
  },
];

export default sampleInvoices;
