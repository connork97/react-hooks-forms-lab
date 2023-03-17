import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchState, setSearchState] = useState("");
  const [itemsState, setItemsState] = useState(items);
  const [newItemState, setNewItemState] = useState({
    name: "",
    category: "Produce"
  });

  function handleItemChange(event) {
    const name = event.target.name;
    setNewItemState({
      ...newItemState,
      [name]: event.target.value
    });
  }

  // function handleItemFormSubmit(newItem) {
  //   setItemsState([...itemsState, newItem]);
  // }
  
  function handleItemFormSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemState.name,
      category: newItemState.category
    }
    setItemsState([...itemsState, newItem]);
  }

  function handleSearchChange(event){
    setSearchState(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = itemsState.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const displaySearch = itemsToDisplay.filter((item) => {
    if (searchState === "") return true;
    return item.name.includes(searchState);
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemChange={handleItemChange} onItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {displaySearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
