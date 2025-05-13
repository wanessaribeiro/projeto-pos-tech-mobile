import { NavProvider } from "@/contexts/navContext"
import Dashboard from "./dashboard"
import { InvoiceProvider } from "@/contexts/InvoiceContext"

const HomePage = () => {
    return (
        <NavProvider>
            <InvoiceProvider>
                <Dashboard/>
            </InvoiceProvider>
        </NavProvider>
    )
}

export default HomePage