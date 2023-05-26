import { useContext } from "react";
import { GlobalContext } from "../Context/GlobleState";

const Transaction = ({transactions}) => {

    
    const { deletTransanction } = useContext(GlobalContext)
    const sign = transactions.amount < 0 ? '-' : '+';

    

  return (
    <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
      {transactions.text}
      <span>{sign}${Math.abs(transactions.amount)}</span>
      <button className="delete-btn" onClick={() => deletTransanction(transactions.id)}>x</button>
    </li>
  );
};

export default Transaction;

