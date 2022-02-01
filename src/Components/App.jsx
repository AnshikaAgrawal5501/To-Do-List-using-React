import React, { useState, useEffect } from "react";
import ToDo from "./Todo";
import InputArea from "./InputArea";


function App() {

  const [newItem, addItem] = useState("");
  const [items, itemsList]=useState([]);

  useEffect(() => {
    const item=JSON.parse(localStorage.getItem('items'));

    if (item) {
      itemsList(item);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  function inputNewItem(event) {
    const item=event.target.value;
    addItem(item);
  }

  function addNewItem() {

    itemsList([...items,newItem]);

    addItem("");
  }

  function makeList(item, index) {
    return <ToDo key={index} id={index} item={item} delItem={deleteItem}/>;
  }

  function deleteItem(index) {
    
    // items.splice(index,1);
    // itemsList(items);

    itemsList(prevItems => {
      return prevItems.filter((item, id) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        type="text"
        inputFunction={inputNewItem}
        value={newItem}
        addFunction={addNewItem}
      />
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
