import React, { useState } from "react";
// IMPORTING REACT TO BE ABLE TO USE ALL COMPONENTS ACROSS APPLICATION

import Winners from "../Winners/Winners";
import NextPlayer from "../NextPlayer/NextPlayer";
import KeepScore from "../KeepScore/KeepScore";
// IMPORT COMPONENTS AND USING THEM TO THE FUNCTIONAL BOARD

// CREATING A BOARD FUNCTIONAL COMPONENT
function GameBoard() {

  const [squares, setSquares] = useState(Array(9).fill(undefined));
  // WE ARE USING `useState` TO CREATE AN ARRAY WITH 9 EMPTY SLOTS, THEN FILLING THOSE SLOTS WITH THE undefined VALUE - 
  // ... THE START INDEX(default 0) TO AN END INDEX(default array.length)

  const nextValue = NextPlayer(squares);
  const winner = Winners(squares);
  const score = KeepScore(winner, squares, nextValue);
  // CONVERTING FUNCTIONAL COMPONENTS TO SINGLE VARIABLE VALUES

  // SELECT SQUARE FUNCTION
  function selectSquare(square) {

    if (winner || squares[square]) {
    // IF WINNER FUNCTION IS TRUE, OR ANY WINNING COMBINATION IS TRUE...

      return;
      // RETURN WINNER
    }
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
    // CONTINUE TO THE NEXT PLAYER TO PICK THEIR SQUARE USING `setSquares` FUNCTION
  }

  // RESTART FUNCTION
  function restart() {

    setSquares(Array(9).fill(undefined));
    // WE ARE CREATING AN ARRAY WITH 9 EMPTY SLOTS, FILLING THOSE SLOTS WITH THE undefined VALUE - FROM A START INDEX (default 0) TO AN END INDEX (default array.length)

  }

  // REACT EVENT LISTENER THAT ALLOWS EACH SQUARE TO BE CLICKED
  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      {/* IMPORTING THE COMPONENT KEEP SCORE AND IT'S ELEMENTS */}
      <div className="score">{score}</div>

      {/* CREATES THE BOARD BY MAKING 3 ROWS AND 3 COLUMNS, RENDERING BY INDEXING 0,1,2,3,4,5,6,7,8 */}
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      {/* RESTARTS THE GAME OVER AT ANYTIME WITH OUR RESTART BUTTON */}
      <button className="restart" onClick={restart}>
        Restart
      </button>
    </div>
  );
}

// EXPORT ALLOWS THIS FUNCTION TO BE UTILIZED BY OTHER REACT COMPONENTS
export default GameBoard;
