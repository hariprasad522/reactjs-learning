import { IoRemoveCircleSharp } from "react-icons/io5";
import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-items-store";

function TodoItem({todoName, todoDate}) {

  const {deleteItem} = useContext(TodoItemsContext);

  return <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button className="btn-solid btn-styled theme-danger kg-button" onClick={() => deleteItem(todoName)}><IoRemoveCircleSharp /></button>
          </div>
        </div>
        </div>

}

export default TodoItem;