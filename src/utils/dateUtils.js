export const calculateStatus = (invoice) => {
  const today = new Date();
  const dueDate = new Date(invoice.dueDate);

  if (invoice.paymentDate) return "paid";
  if (dueDate < today) return "overdue";
  return "pending";
};

export const daysInfo = (invoice) => {
  const today = new Date();
  const due = new Date(invoice.dueDate);

  if (invoice.paymentDate) {
    const paid = new Date(invoice.paymentDate);
    const diff = Math.ceil((paid - due) / (1000 * 60 * 60 * 24));
    return diff > 0
      ? `Paid ${diff} days late`
      : `Paid ${Math.abs(diff)} days early`;
  }

  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
  return diff >= 0
    ? `Due in ${diff} days`
    : `Overdue by ${Math.abs(diff)} days`;
};
