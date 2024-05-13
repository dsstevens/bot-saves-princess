/*

Princess in one of four corners, bot in center
Sample grid is 3x3
Output: print all moves at once

INPUT: 2 params: integer N and the char array grid
  Sample:
  3
  ---
  -m-
  p--

OUTPUT: print all moves on consecutive lines. The moves must be separated by '\n', a newline
  Sample: 
  DOWN
  LEFT

GOAL: 
  reach the princess in as few moves as possible and print to the console all steps at once

HOW: 
  find bot and princess
  determine direction
  output moves by printing to console
*/

function processData() {
  var lines = process.argv[2]?.split('|')
  var dimension = lines?.length
  var grid = [];
  for(var i = 0; i < dimension; i++)
  {
    grid.push(lines[i]);
  }
  if(lines) displayPathtoPrincess(dimension, grid);
  else if(!lines) console.error("Argument needed"); 
}

function displayPathtoPrincess(dimension, grid) {
  let botPosition, princessPosition;
  for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
          if (grid[i][j] === 'm') botPosition = [i, j];
          if (grid[i][j] === 'p') princessPosition = [i, j];
      }
  }

  let vertical = princessPosition[0] - botPosition[0];
  let horizontal = princessPosition[1] - botPosition[1];
  let moves = [];

  if (vertical > 0) moves.push("DOWN");
  else if (vertical < 0) moves.push("UP");
  if (horizontal > 0) moves.push("RIGHT");
  else if (horizontal < 0) moves.push("LEFT");

  let output = moves.join('\n')
  console.log(output);
  return output
}

processData()

//changed this bc not using stdin in the CLI, differs from the hackerrank code block


// "p--|-m-|---"

module.exports = { displayPathtoPrincess }