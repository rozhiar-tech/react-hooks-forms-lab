import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search,onSearchChange] =useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  function haandleSearch(event){
    onSearchChange(event.target.value);
    // console.log(event.target.value);
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
  

    return item.category === selectedCategory;

  });
  const itemsToSearch = itemsToDisplay.filter((item) => {
    if (search === "") return true;

    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  function handleItemFormSubmit(newItem) {
    console.log(newItem);
  }

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={haandleSearch}/>
      <ul className="Items">
        {search.length>0?itemsToSearch.map((item) => {
          return <Item key={item.id} name={item.name} category={item.category} />
        }):itemsToDisplay.map((item) => {
          return <Item key={item.id} name={item.name} category={item.category} />
        } ) }
      </ul>
    </div>
  );
}

export default ShoppingList;
