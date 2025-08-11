import React from 'react'
import { Link } from 'react-router-dom'

function Log({turns}) {
  return (
     <ol id='log'>
         {turns.map((turn)=> <li key={`${turn.square.row}${turn.square.col}` }> {turn.player} selected {turn.square.row},{turn.square.col} </li>)}
     </ol>
  )
}

export default Log