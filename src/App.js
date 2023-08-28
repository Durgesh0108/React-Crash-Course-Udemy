import Expenses from './Components/Expenses/Expenses';

import './App.css';
import React, {useState} from 'react';
import NewExpense from './Components/NewExpenses/NewExpense';
// import { useState } from 'react';

let Dummy_Expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpense] = useState(Dummy_Expense);
  const addExpenseHandler = (expense) => {
    // console.log("in App,js")
    // setExpense([expense, ...expenses])
    setExpense(prevExpense => {
      return [expense, ...prevExpense];
    });
    
  }
  //the below code is alternative the normal html code present below which is written in jsx format using Using React components 
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get Started"),
  //   React.createElement(Expenses,{item: expenses})
  //   )

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      {/* here Expense is the Component to create the list of expenseitems */}
      {/* item keyword is used for key to extract the expenses list present above */}
      {/* expenses is the list of expenses created above */}
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
