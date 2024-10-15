import { useState } from 'react'



function App() {
  let [count, setCount] = useState(0)
  function AddValue() {
    if (count >= 10) {
      return
    }
    // setCount(count + 1)
    setCount(counter => counter + 1)
    // setCount(counter => counter + 1) // Does it Twice if repeated

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
      <div className="bg-blue-500 w-screen h-screen flex justify-center items-center ">
        <div className="bg-white p-5 rounded-lg w-1/4 h-1/4 inset-x-3 inset-y-3 flex flex-col flex-grow-1 gap-2 " >
          <h1 className="text-3xl align-middle text-center">Counter : {count} </h1>

          <div className="flex flex-warp justify-center gap-3 shadow-2xl px-4 py-2 bg-white padding-4 rounded-xl">
    
          <button onClick={AddValue} className=' gap-3 bg-blue-500 px-4 py-1 text-white rounded'>AddValue</button>
          <button onClick={RemoveValue} className='gap-3 bg-blue-500 px-4 py-1 text-white rounded'>RemoveValue</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
