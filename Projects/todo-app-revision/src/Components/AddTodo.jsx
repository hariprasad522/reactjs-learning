import { useState } from "react";
import styles from "./AddTodo.module.css";
import { MdAddTask } from "react-icons/md";

function AddTodo({onClick}) {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    
  };

  const handleAddButtonClick = (event) => {
    
    onClick(todoName,dueDate);
    setTodoName('');
    setDueDate('');
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={styles.addtodoInput}
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
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
          <button className="btn-solid btn-styled theme-success kg-button" onClick={handleAddButtonClick}>
            <MdAddTask />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
