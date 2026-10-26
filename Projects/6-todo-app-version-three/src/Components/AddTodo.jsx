import { useState } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={styles.addtodoInput}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
            
          ></input>
        </div>
        <div className="col-4">
          <input
            className={styles.addtodoInput}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            
          ></input>
        </div>
        <div className="col-2">
          <button
            className="btn-solid btn-styled theme-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
