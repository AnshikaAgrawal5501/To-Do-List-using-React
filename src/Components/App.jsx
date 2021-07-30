import React, { useState } from "react";

function App() {

  const [newItem, addItem] = useState("");
  const [items, itemsList]=useState([]);

  function inputNewItem(event) {
    const item=event.target.value;
    addItem(item);
  }

  function addNewItem() {

    items.push(newItem);
    itemsList(items);

    addItem("");
  }

  function makeList(item) {
    return <li>{item}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={inputNewItem} value={newItem}/>
        <button onClick={addNewItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            items.map(makeList)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
