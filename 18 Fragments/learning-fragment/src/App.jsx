import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";


function App() {
      // let foodItems = [];
      let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
      
  return (
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
