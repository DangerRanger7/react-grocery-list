import React, { useState } from "react";

import { FaMinusCircle } from "react-icons/fa";

import "./App.css";

const App = () => {
  //state variable for grocery list
  const [listItems, setListItems] = useState([
    { id: 1, item: "Milk" },
    { id: 2, item: "Eggs" },
    { id: 3, item: "Cheese" },
    { id: 4, item: "Butter" },
  ]);

  //state variable for input
  const [itemInput, setItemInput] = useState("");

  //handle add item to list
  const handleAdd = () => {
    const newListItem = {
      id: listItems.length + 1,
      item: itemInput,
    };

    const newListItems = [...listItems, newListItem];

    setListItems(newListItems);
    setItemInput("");
  };

  //handle delete item from list
  const handleDelete = (id) => {
    const newListItem = listItems.filter((listItem) => listItem.id !== id);

    setListItems(newListItem);
  };

  return (
    <div className="center section-body">
      <h1>Grocery List</h1>
      <div>
        <input
          type="text"
          placeholder="Add Item"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>

      <table className="">
        <tbody className="">
          {listItems.map((listItem, index) => (
            <tr key={index}>
              <td>
                <h3>{listItem.item}</h3>
              </td>
              <td>
                <FaMinusCircle
                  onClick={() => handleDelete(listItem.id)}
                  className="icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
