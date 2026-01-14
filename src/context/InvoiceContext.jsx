import { createContext, useContext, useEffect, useState } from "react";
import sampleInvoices from "../utils/sampleData";
import { calculateStatus } from "../utils/dateUtils";

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("invoices");
    if (saved) {
      setInvoices(JSON.parse(saved));
    } else {
      setInvoices(sampleInvoices);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const addInvoice = (invoice) => {
    setInvoices((prev) => [...prev, invoice]);
  };

  const markAsPaid = (id) => {
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === id
          ? {
              ...inv,
              paymentDate: new Date().toISOString().split("T")[0],
              status: "paid",
            }
          : inv
      )
    );
  };

  return (
    <InvoiceContext.Provider value={{ invoices, addInvoice, markAsPaid }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoices = () => useContext(InvoiceContext);
