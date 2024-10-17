import React from "react";
import Label from "./Label";
import Item from "./Item";

const ExpenseList = ({ expenseItems, onDelete }) => {
  const deleteExpense = (index) => {
    onDelete(index);
  };

  return (
    <>
      <Item expenseItems={expenseItems} deleteExpense={deleteExpense} />
    </>
  );
};

export default ExpenseList;
