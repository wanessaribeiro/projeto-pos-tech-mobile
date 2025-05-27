import { InvoiceType } from "@/libs/types";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

const transferencesMock: InvoiceType[] = [
  {
    id: "3",
    type: "pix",
    value: 250.0,
    date: new Date(
      "Sat Jun 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "2",
    type: "docTed",
    value: 300.0,
    date: new Date(
      "Mon Apr 08 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "5",
    type: "pix",
    value: 250.0,
    date: new Date(
      "Sat Jun 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "6",
    type: "docTed",
    value: 300.0,
    date: new Date(
      "Mon Apr 08 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "1",
    type: "pix",
    value: 250.0,
    date: new Date(
      "Sat Jun 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "4",
    type: "docTed",
    value: 300.0,
    date: new Date(
      "Mon Apr 08 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "9",
    type: "pix",
    value: 250.0,
    date: new Date(
      "Sat Jun 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "20",
    type: "docTed",
    value: 300.0,
    date: new Date(
      "Mon Apr 08 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
];

const TransferenceContext = createContext<{
  transferences: InvoiceType[],
  setTransferences: Dispatch<SetStateAction<InvoiceType[]>>,
  usePostTransference: (transference: InvoiceType) => void,
  usePatchTransference: (transference: InvoiceType) => void,
  useDeleteTransference: (id: string) => void,
    } | undefined>(undefined);
    

export function TransferenceProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [transferences, setTransferences] = useState([...transferencesMock]);

  const usePostTransference = (transference: InvoiceType) => {
    setTransferences((prev) => [transference, ...prev]);
  }

  const usePatchTransference = (transference: InvoiceType) => {
    setTransferences((prev) => {
      const editTransference = prev.find((i) => i.id === transference.id);
      if (editTransference) Object.assign(editTransference, transference);
      return prev;
    });
  };

  const useDeleteTransference = (id: string) => {
    setTransferences((prev) => {
      const updatedTransference = [...prev]
      const deleteTransference = updatedTransference.findIndex((i) => i.id === id);
      if (deleteTransference >= 0) updatedTransference.splice(deleteTransference, 1);
      return updatedTransference;
    });
  };


  return (
    <TransferenceContext.Provider
      value={{
        usePostTransference,
        usePatchTransference,
        useDeleteTransference,
        setTransferences,
        transferences,
      }}
    >
      {children}
    </TransferenceContext.Provider>
  );
}

export function useTransferenceProvider() {
  const context = useContext(TransferenceContext);
  if (!context) throw new Error("Invalid TransferenceContext");
  return context;
}
