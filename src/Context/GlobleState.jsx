import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    transactions:[]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   function deletTransanction(id){
    dispatch({ 
        type: 'DELETE_TRANSACTION',
        payload: id
    });
   }

   function addTransanction(transactions){
    // console.log(transactions)
    dispatch({ 
        type: 'ADD_TRANSACTION',
        payload: transactions
    });
   }


   return(
   <GlobalContext.Provider value={{ transactions: state.transactions, deletTransanction, addTransanction }}>
     {children}
   </GlobalContext.Provider>
   )

}

export default GlobalProvider