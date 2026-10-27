import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {

  const [calVal, SetCalVal] = useState('');

  const onButtonClicked = (buttonText) => {
    console.log(buttonText);
    if(buttonText === 'C'){
      SetCalVal('');
    } else if(buttonText === '='){
      const result = eval(calVal);
      SetCalVal(result);
    } else {
      const newDispVal = calVal + buttonText;
      SetCalVal(newDispVal);
    }
    
    
  };
  
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
    </div>
  );
}

export default App;
