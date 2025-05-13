import { NavProvider } from "@/contexts/navContext"
import Dashboard from "./dashboard"
import { InvoiceProvider } from "@/contexts/invoiceContext"
import { AccountProvider } from "@/contexts/accountContext"
import { AuthProvider } from "@/contexts/authContext"
import { TransferenceProvider } from "@/contexts/transferencesContext"
import { InvestmentProvider } from "@/contexts/investmentContext"



const HomePage = () => {
    return (

      <AccountProvider>
        <NavProvider>
          <InvoiceProvider>                
            <TransferenceProvider>
              <InvestmentProvider>
                <Dashboard/>
              </InvestmentProvider>
            </TransferenceProvider> 
          </InvoiceProvider>
        </NavProvider>
      </AccountProvider>

    )
}

export default HomePage