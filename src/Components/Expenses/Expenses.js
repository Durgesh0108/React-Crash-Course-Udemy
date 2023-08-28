import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import NewExpense from "../NewExpenses/NewExpense";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// props is used here as a keyword or argument to extract data from different files
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (enteredFilteredYear) => {
    setFilteredYear(enteredFilteredYear);
    // console.log(`old: ${filteredYear}`)
    // console.log(`new: ${setFilteredYear}`)
  };

  const expenseFiltered = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={expenseFiltered} />
        {/* Here {} curly Brackets are used to write the Javascript Code */}
        {/* {expenseFiltered.length === 0 && <p>No Expense Found</p>}
        {expenseFiltered.length > 0 &&
          expenseFiltered.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        <ExpensesList item={expenseFiltered}></ExpensesList>

        {/* <ExpenseItem
          // props is used to extract data where as item is the keyword that is used as the key in different file or component
          // here titlt, amount, date are the keys of the dictionary expenses which is present in app.js and extract here with help of item keyword
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
