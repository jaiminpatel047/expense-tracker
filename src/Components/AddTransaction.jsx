import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobleState';


const AddTransaction = () => {
    const {addTransanction} = useContext(GlobalContext)

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const addNewTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }

        addTransanction(addNewTransaction);
    }

  return (
    <>
    <h3>Add New Transaction</h3>
    <form onSubmit={onSubmit}> 
        <div className="form-control">
            <label htmlFor="Text">Text</label>
            <input type="text" id='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='enter text...' />
        </div>
        <div className="form-control">
            <label htmlFor="Amount">
                Amount <br />
                (negative - expense, positive - income)
            </label>
            <input type="text" id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='enter amount...'/>
        </div>
        <button className='btn'>Add transaction</button>
    </form>
    </>
  )
}

export default AddTransaction