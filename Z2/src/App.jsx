import { useState } from 'react'
import './App.css'


function App() {
  let [count, setCount] = useState(0)
  function AddValue() {
    if (count >= 10) {
      return
    }
    setCount(count + 1)
    // setCount(count + 1)
  }
  function RemoveValue() {
    if (count <= 0) {
      return  
    }
    setCount(count - 1)
  }
  return (
    <>
      <div className="App">
        <h1>Counter : {count}</h1>
        <button onClick={AddValue}>AddValue</button>
        <button onClick={RemoveValue}>RemoveValue</button>
      </div>
    </>
  )
}

export default App
