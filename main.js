function knightMoves(startingPosition, endingPosition) {
  // legal moves of the knight chess figure can make
  let legalMoves = [
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
  ];

  const visitedCells = new Set([]);

  // convert coordinates from object to string and push it to visitedCells array so that we now which cells are visited and so that we don't end up running loop forever

  const startingCoordinateString = String(startingPosition);
  visitedCells.add(startingCoordinateString);

  const queue = [startingPosition];

  // use bfs algo for searching the shortest path
  while (queue.length > 0) {
    const current = queue.shift();

    if (current[0] === endingPosition[0] && current[1] === endingPosition[1]) {
      console.log(visitedCells);
      break;
    }

    //iterate over legal moves
    for (let move in legalMoves) {
      let newCoordinateX = current[0] + legalMoves[move][1];
      let newCoordinateY = current[1] + legalMoves[move][0];
      const newCoordinate = new Array(newCoordinateX, newCoordinateY);
      const newCoordinateString = newCoordinate.toString();

      //keep the knight on the board
      if (newCoordinateX > -1 && newCoordinateX < 8 && newCoordinateY > -1 && newCoordinateY < 8) {
        // same thing, check if the value is in the visitedCells array if yes, don't push it to queue if no push it
        if (!visitedCells.has(newCoordinateString)) {
          visitedCells.add(newCoordinateString);
          queue.push(newCoordinate);
        }
      }
    }
  }
}

console.log(knightMoves([0, 0], [3, 3]));
