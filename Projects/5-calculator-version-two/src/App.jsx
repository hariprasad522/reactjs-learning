import styles from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import { useState } from 'react'


function App() {
  const [calVal, setCalVal] = useState('');
  const onButtonClicked = (buttonText) => {
    if(buttonText === 'C'){
         setCalVal('');
    } else if (buttonText === '='){
         const result = eval(calVal);
         setCalVal(result); 
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }


  };

  return <div className={styles.calculator}>
         <Display displayValue={calVal}></Display>
         <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
    </div>
  
}

export default App
