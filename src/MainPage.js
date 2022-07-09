import "./Styles.css"
import { GlobalProvider } from "./context/GlobalContext";
import { Header } from "./components/Header"
import { TransactionForm } from "./components/TransactionForm";

function MainPage() {
    return (
        <GlobalProvider>
            <Header />
            <TransactionForm />
        </GlobalProvider>
    );
}

export default MainPage;