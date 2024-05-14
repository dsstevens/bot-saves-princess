//  This code should be copy and pasted and entirely replace the given code block in the HackerRank IDE

function processData(input) {
  const lines = input.split('\n');
  const dimension = parseInt(lines[0]);
  let grid = [];
  for(var i = 1; i <= dimension; ++i)
  {
      grid.push(lines[i]);
  }
  displayPathtoPrincess(dimension, grid);
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

  console.log(moves.join('\n'));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});