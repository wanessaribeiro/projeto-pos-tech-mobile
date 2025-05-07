import { NavProvider } from "@/contexts/navContext"
import Dashboard from "./dashboard"

const HomePage = () => {
    return (
        <NavProvider>
            <Dashboard/>
        </NavProvider>
    )
}

export default HomePage