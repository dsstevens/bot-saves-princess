function processData(input) {
  const lines = input.split('\n');
  const dimension = parseInt(lines[0]);
  const botPosition = lines[1].split(' ').map(Number);
  let grid = [];
  for(var i = 2; i < dimension + 2; ++i)
  {
      grid.push(lines[i]);
  }
  console.log(moveForward(dimension, botPosition[0], botPosition[1], grid));
}

function moveForward(dimension, r, c, grid) {
  let botPosition = [r, c];
  let princessPosition;
  for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
          if (grid[i][j] === 'p') princessPosition = [i, j];
      }
  }
  let vertical = princessPosition[0] - botPosition[0];
  let horizontal = princessPosition[1] - botPosition[1];

  if (vertical > 0) return "DOWN";
  else if (vertical < 0) return "UP";
  else if (horizontal > 0) return "RIGHT";
  else if (horizontal < 0) return "LEFT";
}

 processData(input)
// still need to refactor the input for processData for node functionality in the CLI
 module.exports = {moveForward}