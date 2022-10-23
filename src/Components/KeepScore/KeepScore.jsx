// KEEP SCORE FUNCTION RETURNS "WINNER" AND DISPLAYS WHO WON "X" OR "O" OR TIE
function KeepScore(winner, squares, next) {

  // RETURNS WINNER: "X's" OR "O's"
  return winner
    ? 
      `Winner: ${winner}`
      // IF THERE IS A WINNER (TRUE), DISPLAY WINNER: "X's" OR "O's"
      
    : squares.every(Boolean)
      // IF NO WINNER, CONTINUE
      
      ? `Tie: Play again!`
      // ELSE-IF TIE, SAY "TIE: PLAY AGAIN!"
      
      
    : `Player: ${next}`;
    // ELSE NEXT PLAYER CONTINUE
}

export default KeepScore
// EXPORT ALLOWS THIS FUNCTION TO BE UTILIZED BY OTHER REACT COMPONENTS
