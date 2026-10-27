import { IoRemoveCircleSharp } from "react-icons/io5";

function TodoItem({todoName, todoDate, handleDeleteButtonClick}) {

  return <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button className="btn-solid btn-styled theme-danger kg-button" onClick={() => handleDeleteButtonClick(todoName)}><IoRemoveCircleSharp /></button>
          </div>
        </div>
        </div>

}

export default TodoItem;