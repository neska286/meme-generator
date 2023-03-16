import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Inputs from './components/Inputs';
import Navbar from './components/Navbar';
import boxes from './boxes'
import Box from './components/Box';
import CurrencyExchanger from './components/CurrencyExchanger';


function App({darkMode}) {
  const[state, setState] = useState(boxes)
  // const [count, setcount] = useState(0);
  // const thingsArray =["Thing 1","Thing 2"]
  // const ThingsElements = thingsArray.map((item)=>(
  //   <p key={item}>{item}</p>
  // ))
  // function addthings(){
  //   const newThingsAdded = `Thing ${thingsArray.length +1}`
  //  thingsArray.push(newThingsAdded)
  //   console.log(thingsArray)
  // }
  // function handleDecrease(){
  //   setcount(prevState => prevState -1)
  // }
  // function handleIncrease(){
  //   setcount(prevState => prevState+1)
  // }

  function handleToggle(id){
   console.log(id)
}

  return (
    <div >
      <Navbar/>
      <CurrencyExchanger/>
      {/* <Inputs/>
      <Card/> */}
      {/* <Button/> */}
      {/* <button onClick={addthings}>Add Items</button>
      {ThingsElements} */}
      {/* <div className="App">
        <button onClick={handleDecrease} className='counter--minus'>-</button>
        <Count count={count}/>
        <button onClick={handleIncrease}className='counter--plus'>+</button>
      </div> */}
      {/* <div className='App'>
        <h1>Boxes will goes Here</h1>
        {state.map(box=> (
    
          <Box  key={box.id}
           on={box.on}
           handleToggle={handleToggle}
           id={box.id}/>
  
        ))}
      </div> */}
    </div>
  );
}

export default App;
