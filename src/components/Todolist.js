import React, { useState } from "react";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Todo.css'

function TodoItem({ item, index, deleteEntry, checkList }) {
  return (
    <div className="list-item-container">
      <span className="list-item" style={{ textDecoration: item.done ? "underline overline line-through" : "none" }}>
        {item.text}
      </span>
      <div className="buttons-container">
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => checkList(index)}
        />
        <FontAwesomeIcon icon={faTrashCan} className="delete-entry" onClick={() => deleteEntry(index)} />
      </div>
    </div>
  );
}

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddItem() {
    if (inputValue !== "") {
      setItems([...items, { text: inputValue, done: false }]);
      setInputValue("");
    }
  }

  function deleteEntryItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  function checkListItem(index) {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div>
      <h1>To-do List</h1>
      <div className="list-block">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder='Add new task'
          className="list-box"
        />
        <button className="add-btn" onClick={handleAddItem}>Add</button>
        {items.map((item, index) => (
          <div key={index} className="todo-item">
            <TodoItem
              item={item}
              index={index}
              deleteEntry={deleteEntryItem}
              checkList={checkListItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;