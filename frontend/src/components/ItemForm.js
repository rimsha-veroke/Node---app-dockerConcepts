import React, { useState } from "react";
import axios from "axios";

function ItemForm({ onNewItem }) {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/items", { name }).then(res => {
      onNewItem(res.data);
      setName("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter item"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ItemForm;
s