import React, { useState } from "react";
import Form from "./Components/Form";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expenseItems, setExpenseItems] = useState([]);

  // copy array and add in new element
  const handleFormSubmit = (data) => {
    setExpenseItems((prevState) => [...prevState, data]);
  };

  const handleDeleteExpenses = (index) => {
    setExpenseItems((prevState) => prevState.filter((_, idx) => idx !== index));
  };

  return (
    <div className="parent-container">
      <div className="main-container">
        <Form onSubmit={handleFormSubmit} />
        {/* {expenseItems.map((item, index) => (
          <li key={index}>
            <p>Item: {item.item}</p>
            <p>Price: {item.price}</p>
            <p>Date: {item.date}</p>
          </li>
        ))} */}
        <ExpenseList
          expenseItems={expenseItems}
          onDelete={handleDeleteExpenses}
        />
      </div>
    </div>
  );
}

export default App;
