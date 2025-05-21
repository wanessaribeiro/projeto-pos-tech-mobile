import { NavProvider } from "@/contexts/navContext"
import { InvoiceProvider } from "@/contexts/invoiceContext"
import { AccountProvider } from "@/contexts/accountContext"
import { TransferenceProvider } from "@/contexts/transferencesContext"
import { InvestmentProvider } from "@/contexts/investmentContext"
import Home from "./login/home"



const HomePage = () => {
    return (

      <AccountProvider>
        <NavProvider>
          <InvoiceProvider>                
            <TransferenceProvider>
              <InvestmentProvider>
                <Home/>
              </InvestmentProvider>
            </TransferenceProvider> 
          </InvoiceProvider>
        </NavProvider>
      </AccountProvider>

    )
}

export default HomePage