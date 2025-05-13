import { InvoiceType } from "@/constants/types";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

const invoicesMock: InvoiceType[] = [
  {
    id: "4",
    type: "Saque",
    value: 600.0,
    date: new Date(
      "Sat Oct 19 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "3",
    type: "Pix",
    value: 250.0,
    date: new Date(
      "Sat Jun 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "2",
    type: "DOC/TED",
    value: 300.0,
    date: new Date(
      "Mon Apr 08 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "1",
    type: "Depósito",
    value: 300.0,
    date: new Date(
      "Mon Apr 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
];

const InvoiceContext = createContext<{
  invoices: InvoiceType[],
  selectedInvoice: InvoiceType | undefined,
  setSelectedInvoice: Dispatch<SetStateAction<InvoiceType>>,
  useGetInvoice: (id: string) => InvoiceType | undefined,
  usePostInvoice: (invoice: InvoiceType) => void,
  usePatchInvoice: (invoice: InvoiceType) => void,
  useDeleteInvoice: (id: string) => void,
    } | undefined>(undefined);
    

export function InvoiceProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [invoices, setInvoices] = useState([...invoicesMock]);
  const [selectedInvoice, setSelectedInvoice] = useState({id: "", type: "Saque", value: 0, date: new Date()});

  const useGetInvoice = (id: string) => {
    const invoice = invoicesMock.find((i) => i.id === id);
    return invoice;
  };

  const usePostInvoice = (invoice: InvoiceType) => {
    setInvoices((prev) => [invoice, ...prev]);
  };

  const usePatchInvoice = (invoice: InvoiceType) => {
    setInvoices((prev) => {
      const editInvoice = prev.find((i) => i.id === invoice.id);
      if (editInvoice) Object.assign(editInvoice, invoice);
      return prev;
    });
  };

  const useDeleteInvoice = (id: string) => {
    setInvoices((prev) => {
      const updatedInvoices = [...prev]
      const deleteInvoice = updatedInvoices.findIndex((i) => i.id === id);
      if (deleteInvoice >= 0) updatedInvoices.splice(deleteInvoice, 1);
      return updatedInvoices;
    });
  };

  return (
    <InvoiceContext.Provider
      value={{
        selectedInvoice,
        setSelectedInvoice,
        useGetInvoice,
        usePostInvoice,
        usePatchInvoice,
        useDeleteInvoice,
        invoices,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export function useInvoiceProvider() {
  const context = useContext(InvoiceContext);
  if (!context) throw new Error("Invalid InvoiceContext");
  return context;
}
