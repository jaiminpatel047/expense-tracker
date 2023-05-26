import './App.css';
import Balance from './Components/Balance';
import Header from './Components/Header';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobleState';
import NewTransactionList from './Components/NewTransactionList';
import NewIncomeExpenses from './Components/NewIncomeExpenses';


function App() {
  return (
   <GlobalProvider>
   <Header />
   <div className="container">
    <Balance />
    <NewIncomeExpenses />
    <NewTransactionList />
    <AddTransaction />
   </div>
   </GlobalProvider>
  );
}

export default App;
