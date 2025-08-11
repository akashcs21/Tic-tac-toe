import React, { useState } from 'react'

function Player({ initialName, symbol, isActive , onNameChange }) {
  const [isEditing, setEditing] = useState(false);
  const [editPlayerName, setEditPlayerName] = useState(initialName);

  function handleClick() {
    setEditing((isEditing) => !isEditing);

    if(isEditing){
 onNameChange(symbol,editPlayerName)
    }
   

  }

  function handleChange(event) {
    setEditPlayerName(event.target.value);

  }

  let playerName = isEditing ? (
    <input
      type="text"
      value={editPlayerName}
      required
      onChange={handleChange}
    />
  ) : (
    <span className="player-name">{editPlayerName}</span>
  );

  return (
    <li className={isActive ? 'active' : undefined}>
      {playerName}
      <span className="player-symbol">{symbol}
            
      </span>
   
      <button onClick={handleClick}>
        {isEditing ? "save" : "edit"}

      </button>
      
    </li>
  );
}

export default Player;
