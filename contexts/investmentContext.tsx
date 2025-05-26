import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export interface InvestmentType {
  investmentFunds: number;
  treasure: number;
  privatePrevidence: number;
  stocks: number;
}

const investmentsMock: InvestmentType = {
    investmentFunds: 50,
    treasure: 90,
    privatePrevidence: 120,
    stocks: 60
}

const InvestmentContext = createContext<{
  investments: InvestmentType,
  newInvestment: (type: string, newInvestment: number) => void,
  totalInvestment: number,
  setInvestments: Dispatch<SetStateAction<InvestmentType>>,
    } | undefined>(undefined);
    

export function InvestmentProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [investments, setInvestments] = useState(investmentsMock);
  const [totalInvestment, setTotalInvestment] = useState(investments.investmentFunds + investments.privatePrevidence + investments.stocks + investments.treasure)

  const newInvestmentFunds = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.investmentFunds
    setInvestments({...investments, investmentFunds: newTotalInvestment})
  }

  const newTreasure = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.treasure
    setInvestments({...investments, treasure: newTotalInvestment})
  }

  const newPrivatePrevidence = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.privatePrevidence
    setInvestments({...investments, privatePrevidence: newTotalInvestment})
  }

  const newStocks = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.stocks
    setInvestments({...investments, stocks: newTotalInvestment})
  }

  const newInvestment = (type: string, newInvestment: number) => {
    if(type === 'investmentFunds') newInvestmentFunds(newInvestment);
      else if (type === 'treasure') newTreasure(newInvestment);
      else if (type === 'privatePrevidence') newPrivatePrevidence(newInvestment);
      else if (type === 'stocks') newStocks(newInvestment);

    const total = totalInvestment + newInvestment;
    setTotalInvestment(total);
  }

  return (
    <InvestmentContext.Provider
      value={{
        investments,
        setInvestments,
        newInvestment,
        totalInvestment
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestmentProvider() {
  const context = useContext(InvestmentContext);
  if (!context) throw new Error("Invalid InvestmentContext");
  return context;
}
