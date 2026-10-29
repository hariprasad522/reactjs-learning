import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-items-store";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
