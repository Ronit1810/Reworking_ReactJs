
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
  // let counter = 15
  const AddCount = () => {
    if (counter < 20) {
      counter = counter +1;
      console.log("Count: ",counter);
      setCounter(counter)
    }
  }

  const RemoveCount = () => {
    if (counter > 0) {
      counter = counter -1;
      console.log("Count: ",counter);
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>First React</h1>
      <h3>counter: {counter}</h3>

      <button onClick={AddCount}>Add</button>
      <br/><br/>
      <button onClick={RemoveCount}>Remove</button>
    </>
  )
}

export default App
