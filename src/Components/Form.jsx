import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
  // i need to push the updated stateVariable up to <App />
  const [itemAttributes, setItemAttributes] = useState({
    item: "",
    price: "",
    date: "",
  });

  const handleInputChange = (name, newValue) => {
    setItemAttributes({ ...itemAttributes, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(itemAttributes);
  };

  return (
    // when form is submited, call handleSubmit() which push local stateVariable up
    <form onSubmit={handleSubmit}>
      <div className="border">
        <div>
          <Label htmlFor="item" />
          <Input
            id="item"
            type="text"
            name="item"
            value={itemAttributes.item}
            onChange={(newValue) => handleInputChange("item", newValue)}
          />
        </div>

        <div>
          <Label htmlFor="price" />
          <Input
            id="price"
            type="number"
            name="price"
            value={itemAttributes.price}
            onChange={(newValue) => handleInputChange("price", newValue)}
          />
        </div>

        <div>
          <Label htmlFor="date" />
          <Input
            id="date"
            type="date"
            name="date"
            value={itemAttributes.date}
            onChange={(newValue) => handleInputChange("date", newValue)}
          />
        </div>
        <div className="div-submit-button">
          <Button name="submit" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
