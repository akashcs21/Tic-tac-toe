import React, { useState } from 'react'

function GameBoard({board,onSelect}) {
 
// const [gameBoard,setGameBoard] = useState(initialGameBoard);
//  function handleSelectSquare(rowIndex,colIndex){
//           setGameBoard((prevGameBoard)=>{
//           const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
//             updatedBoard[rowIndex][colIndex] = activePlayerSymbol
//             return updatedBoard;

//          })
//          onSelect(rowIndex,colIndex);
         
//  }
  return (
    <ol id='game-board'>
     
      {board.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
          {row.map((playerSymbol,colIndex) => <li key={colIndex}>
            <button onClick={()=>onSelect(rowIndex,colIndex)} disabled = {playerSymbol!= null}>{playerSymbol}</button> </li>)}
        </ol>
      </li>)}
    </ol>
  )
}

export default GameBoard