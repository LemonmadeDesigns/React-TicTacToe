// WINNERS FUNCTION TO DECLARE WINNER
function Winners(squares, line) {

  // CREATE AND STORE A PATTERN OF WINNING COMBINATIONS
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // (for in) LOOPS THROUGH THE ARRAY TO FIND THE WINNING COMBINATION
  for (line in lines) {
    const [col_1, col_2, col_3] = lines[line];
    // ASSIGNED THREE VARIABLES TO `lines[line]`

    console.table(lines[line]);
    // CONSOLE LOG TO SEE THE WINNING COMBINATION OF NUMBERS

    // IF THIS CONDITION IS TRUE, DECLARE A WINNER!!!
    if (squares[col_1] && 
        // IF COL_1 IS TRUE

        squares[col_1] === squares[col_2] &&
        // AND COL_1 IS STRICTLY EQUAL TO COL_2

        squares[col_1] === squares[col_3])
        // AND COL_1 IS STRICTLY EQUAL TO COL_3
        
        {
      return squares[col_1];
      // RETURN THE WINNING COMBINATION
    }
  }
  
  return undefined;
  // ELSE RETURN NOTHING AND CONTINUE
}

export default Winners;
// EXPORT ALLOWS THIS FUNCTION TO BE UTILIZED BY OTHER REACT COMPONENTS
