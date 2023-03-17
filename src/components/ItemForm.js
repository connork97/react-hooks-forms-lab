import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemChange, onItemFormSubmit }) {
  // function createNewItem(event) {
  //   const newItem = {
  //     id: uuid(),
  //     name: newItemState.name,
  //     category: newItemState.category
  //   }
  //   onItemFormSubmit(newItem);
  //   console.log(newItem);
  //   console.log(newItemState);
  //   event.preventDefault();
  // }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onItemChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onItemChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
