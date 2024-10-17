import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";

const Form = () => {
  const [itemAttributes, setItemAttributes] = useState({
    item: "",
    price: "",
    date: "",
  });

  const handleInputChange = (name, newValue) => {
    setItemAttributes({ ...itemAttributes, [name]: newValue });
  };

  return (
    <form>
      <div>
        <Label htmlFor="item" />
        <Input
          id="item"
          type="text"
          name="item"
          value={itemAttributes.item}
          onValueChange={(newValue) => handleInputChange("item", newValue)}
        />
        {itemAttributes.item}
      </div>

      <div>
        <Label htmlFor="price" />
        <Input
          id="price"
          type="number"
          name="price"
          value={itemAttributes.price}
          onValueChange={(newValue) => handleInputChange("price", newValue)}
        />
        {itemAttributes.price}
      </div>

      <div>
        <Label htmlFor="date" />
        <Input
          id="date"
          type="date"
          name="date"
          value={itemAttributes.date}
          onValueChange={(newValue) => handleInputChange("date", newValue)}
        />
        {itemAttributes.date}
      </div>

      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
