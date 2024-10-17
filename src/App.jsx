import React from "react";
import Form from "./Components/Form";
import ExpenseList from "./Components/ExpenseList";

function App() {
  return (
    <div className="main-container">
      <Form/>
      <ExpenseList/>
    </div>
  );
}

export default App;
