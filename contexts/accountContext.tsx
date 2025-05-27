import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

export interface AccountType {
  id: string;
  email: string;
  password: string;
  type: string;
  name: string;
  balance: number;
  phone: string;
}

export const accountMock: AccountType ={
    id: '1010',
    email: "joananaves@email.com",
    password: "3231rabanete",
    type: 'Conta Corrente',
    name: 'Joana Naves',
    balance: 2500,
    phone: '(67) 91234-1234',
}


const AccountContext = createContext<{
  account: AccountType,
  balance: number,
  setBalance: Dispatch<SetStateAction<number>>,
} | undefined>(undefined);
    

export function AccountProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [account, setAccount] = useState(accountMock);
  const [balance, setBalance] = useState(accountMock.balance || 0);

  useEffect(() => {
    setAccount({...account, balance: balance})
  }, [balance])

  return (
    <AccountContext.Provider
      value={{
        account,
        balance,
        setBalance,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountProvider() {
  const context = useContext(AccountContext);
  if (!context) throw new Error("Invalid AccountContext");
  return context;
}
