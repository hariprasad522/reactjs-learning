import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // let [foodItems, setFoodItems] = useState(["Salad", "Green Vegetable", "Roti"]);
  let [foodItems, setFoodItems] = useState([]);
  
  // let textStateArr = useState("Enter item to show");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  
  const onKeyDown = (event) => {
    if(event.key === 'Enter') {
       let newFoodItem = event.target.value;
       event.target.value = '';
       let newItems = [...foodItems, newFoodItem];
       setFoodItems(newItems);
    }


  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

    </>
  );
}

export default App;
