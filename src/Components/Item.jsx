import React from "react";
import Label from "./Label";
import Button from "./Button";

const Item = ({ expenseItems, deleteExpense }) => {
  return (
    <>
      {expenseItems.map((expenses, idx) => {
        return (
          <div className="item" key={idx}>
            <Label item={expenses.item} />
            <Label item={expenses.price} />
            <Label item={expenses.date} />
            <Button name="delete" onClick={() => deleteExpense(idx)} />
          </div>
        );
      })}
    </>
  );
};

export default Item;
