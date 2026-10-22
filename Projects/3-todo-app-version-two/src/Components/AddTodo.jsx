import styles from "./AddTodo.module.css";

function AddTodo() {
  return  <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input className={styles.addtodoInput} type="text" placeholder="Enter Todo Here"></input>
          </div>
          <div className="col-4">
            <input className={styles.addtodoInput} type="date"></input>
          </div>
          <div className="col-2">
            <button className="btn-solid btn-styled theme-success kg-button">
              Add
            </button>
          </div>
        </div>
        </div>
}

export default AddTodo;