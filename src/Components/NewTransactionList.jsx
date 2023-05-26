import { useContext } from "react"
import { GlobalContext } from "../Context/GlobleState"
import Transaction from "./Transaction"


const NewTransactionList = () => {
    const { transactions } = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
            transactions.map(transactions => (
               <Transaction key={transactions.id} transactions={transactions}/>
            ))
        }
      </ul>
    </>
  )
}

export default NewTransactionList