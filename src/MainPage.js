//import "./Styles.css"
import { GlobalProvider } from "./context/GlobalContext";
import { Header } from "./components/Header"
import { TransactionForm } from "./components/TransactionForm";
import { Grid } from '@mui/material';

function MainPage() {
    return (
        <GlobalProvider>
        <Grid item>
            <Header />
            <TransactionForm/>
        </Grid>
        </GlobalProvider>
    );
}

export default MainPage;