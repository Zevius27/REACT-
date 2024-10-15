// import React from "react";  
import { useState } from 'react'


function Card() {
   const [color, setColor] = useState("lightblue")

   return (
      <div
         className="w-full h-screen "
         style={{
            backgroundColor: color,
         }}
      >
         <div className='fixed flex flex-warp justify-center bottom-12 inset-x-0 px-4 gap-4 shadow-2xl '>
            <div className="flex flex-warp justify-center gap-3 shadow-2xl px-4 py-2 bg-white padding-4 rounded-xl">
               <button className="bg-red-500 px-4 py-1 text-white rounded"
                  style={{ backgroundColor: "red" }}
                  onClick={() => setColor("red")}
               >
                  Red
               </button>

               <button className="bg-red-500 px-4 py-1 text-white rounded"
                  style={{ backgroundColor: "green" }}
                  onClick={() => setColor("green")}
               >
                  Green
               </button>


               <button className="bg-red-500 px-4 py-1 text-white rounded"
                  style={{ backgroundColor: "blue" }}
                  onClick={() => setColor("blue")}
               >
                  blue
               </button>



               <button className="bg-red-500 px-4 py-1 text-white rounded"
                  style={{ backgroundColor: "#e6df20" }}
                  onClick={() => setColor("#e6df20")}
               >  
                  yellow
               </button>




            </div>
         </div>
      </div>

   )
}

export default Card