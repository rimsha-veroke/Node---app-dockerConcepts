import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./components/ItemForm";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items").then(res => {
      setItems(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <ItemForm onNewItem={item => setItems([...items, item])} />
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
