import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // setTodoItems((currValue) => {
    //   const newTodoItems = [
    //   ...currValue,
    //   {
    //     name: itemName,
    //     dueDate: itemDueDate,
    //   },
    // ];
    // return newTodoItems;
    // });

    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
