import { useState } from "react"



function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    if (count >= 10) {
      return
    }
    setCount(counter => counter + 1)
    
  }
  const removeValue = () => {
    if (count <= 0) {
      return
    }
    setCount(count - 1)
  }
  return (
    <>

      <button onClick={addValue}>AddValue</button>
      <button onClick={removeValue}>RemoveValue</button>

      <h1>Counter : {count}</h1>
    </>
  )
}

export default App
