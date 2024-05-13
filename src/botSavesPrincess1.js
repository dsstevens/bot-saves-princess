function processData() {
  const lines = process.argv[2]?.split('|').splice(1)
  const dimension = lines?.length
  let grid = [];
  for(let i = 0; i < dimension; i++)
  {
    grid.push(lines[i]);
  }
  if(lines) displayPathtoPrincess(dimension, grid);
  else if(!lines) console.error("No grid provided"); 
}

function displayPathtoPrincess(dimension, grid) {
  let botPosition, princessPosition;
  for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
          if (grid[i][j] === 'm') botPosition = [i, j];
          if (grid[i][j] === 'p') princessPosition = [i, j];
      }
  }

  const vertical = princessPosition[0] - botPosition[0];
  const horizontal = princessPosition[1] - botPosition[1];
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

module.exports = { displayPathtoPrincess }