import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    
    const newTodoItems = [...todoItems,
    { 
    name: itemName,
    dueDate: itemDueDate
     },
   ];
   setTodoItems(newTodoItems);
  
  }
  const handleDeleteItem = (itemName) => {
     
      const newItems = todoItems.filter((item) => item.name !== itemName);
      setTodoItems(newItems);
  }


  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onClick={handleNewItem}></AddTodo>
      {todoItems.length  === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
