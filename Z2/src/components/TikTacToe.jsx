import React, { useState } from 'react';

function TikTacToe() {
   // State for each cell in the board
   const [board, setBoard] = useState({
      a: "", b: "", c: "",
      d: "", e: "", f: "",
      g: "", h: "", i: ""
   });

   // State to track the current player (X or O)
   const [turn, setTurn] = useState("X");

   // Function to handle click and update the board
   const handleClick = (cell) => {
      // If the cell is already occupied, return early
      if (board[cell]) return;

      // Update the clicked cell with the current player's symbol
      setBoard(prevBoard => ({
         ...prevBoard ,
          [cell]: turn
      }));

      // Switch the turn between X and O
      setTurn(prevTurn => (prevTurn === "X" ? "O" : "X"));
   };

   return (
      <div
         className="w-screen h-screen flex justify-center items-center"
         style={{
            backgroundColor: "lightblue",
         }}
      >
         <div className="w-1/4 h-2/4 text-red-800 text-3xl font-bold fixed grid shadow-2xl border-2 border-black grid-cols-3 grid-rows-3">
            {/* Each div represents a cell in the Tic-Tac-Toe board */}
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('a')}>
               {board.a}
            </div>
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('b')}>
               {board.b}
            </div>
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('c')}>
               {board.c}
            </div>
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('d')}>
               {board.d}
            </div>
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('e')}>
               {board.e}
            </div>
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('f')}>
               {board.f}
            </div>
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('g')}>
               {board.g}
            </div>
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('h')}>
               {board.h}
            </div>
            <div className="w-full h-full border-2 border-black flex justify-center items-center"
                 onClick={() => handleClick('i')}>
               {board.i}
            </div>
         </div>
      </div>
   );
}

export default TikTacToe;
