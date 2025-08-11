import { useState } from "react"
import GameBoard from "./components/GameBoard"
import { WINNING_COMBINATIONS } from "../Winning-Combination";
import Log from "./components/Log";
import Player from "./components/Player"
import GameOver from "./components/GameOver";
const initialGameBoard =
  [[null, null, null], [null, null, null], [null, null, null]]


function deriveActivePlayer(gameTurns) {
  let curActivePlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    curActivePlayer = 'O';
  }
  return curActivePlayer
}

function App() {


  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState([{ 'X': 'Player 1', 'O': 'Player 2' }])
  // const [hasWinner,setHasWinner] = useState(false)
  let gameBoard = [...initialGameBoard.map(row => [...row])];

  const activePlayer = deriveActivePlayer(gameTurns)

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {

      winner = firstSquareSymbol


    }

  }
  const hasDraw = gameTurns.length === 9 && !winner
  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns((prevTurns) => {
      const curActivePlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: curActivePlayer }, ...prevTurns];
      return updatedTurns;

    });


  }
  function handleRestart() {
    setGameTurns([])
  }
  function handlePlayerNamechange(symbol, newName) {
    setPlayerName((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName }
    })
  }
  return (
    <main>
      <div id="game-container">
        {/* PLAYEERS  */}

        <ol id="players" className="highlight-player">
          <button style={{ color: "white", border: "2px solid red", width: "100px", borderRadius: "10px" }} onClick={handleRestart}>Restart</button>
          <Player handleRestart={handleRestart} initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onNameChange={handlePlayerNamechange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onNameChange={handlePlayerNamechange} />

        </ol>
      console.log("Or btao git add hui kya!")
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}

        <GameBoard onSelect={handleSelectSquare} board={gameBoard} />

        {/* GAME */}
      </div>
      <Log turns={gameTurns} ></Log>
    </main>
  )
}

export default App
