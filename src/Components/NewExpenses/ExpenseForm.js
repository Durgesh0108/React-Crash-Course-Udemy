import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // useState has two parameters the initialValue and the finalValue
  // the initialValue is enteredData or data/value that was assigned
  // the finalValue is that the user wants to set when the state changes or a functions gets executed.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput,setUserInput,] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(`Old Title:${enteredTitle}`)
    // console.log(`New Title:${setEnteredTitle}`)

    // console.log(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // console.log(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value }
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log("Form Submitted");
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
