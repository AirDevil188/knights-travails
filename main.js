function knightMoves(startingPosition, endingPosition) {
  // legal moves of the knight chess figure can make
  let legalMoves = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
  ];
  const visitedCells = new Set([]);
  let object = { x: startingPosition[0], y: startingPosition[1] };

  // convert coordinates from object to string and push it to visitedCells array so that we now which cells are visited and so that we don't end up running loop forever

  const queue = [object];

  // use bfs algo for searching the shortest path
  while (queue.length > 0) {
    let current = queue.shift();
    const currentPositionToString = `${current.x}, ${current.y}`;
    visitedCells.add(currentPositionToString);

    if (current.x === endingPosition[0] && current.y === endingPosition[1]) {
      console.log(shortestPath(current));
      break;
    }

    //iterate over legal moves
    for (let move in legalMoves) {
      let newCoordinateX = current.x + legalMoves[move][0];
      let newCoordinateY = current.y + legalMoves[move][1];

      let newCoordinateMove = { x: newCoordinateX, y: newCoordinateY, parent: current };

      const newCoordinateMoveString = `${newCoordinateMove.x}, ${newCoordinateMove.y}`;

      //keep the knight on the board
      if (newCoordinateX > -1 && newCoordinateX < 8 && newCoordinateY > -1 && newCoordinateY < 8) {
        // same thing, check if the value is in the visitedCells array if yes, don't push it to queue if no push it
        if (!visitedCells.has(newCoordinateMoveString)) {
          visitedCells.add(newCoordinateMoveString);

          queue.push(newCoordinateMove);
          object = newCoordinateMove;
        }
      }
    }
  }
}

// function for finding the shorting path
function shortestPath(current) {
  const shortestPath = [];
  while (current) {
    shortestPath.push([current.x, current.y]);
    current = current.parent;
  }
  // we have to reverse the array so that we can get the path in the right order
  const reversedShortestPath = shortestPath.reverse();
  console.log("=> You made it in", reversedShortestPath.length - 1, " moves! Here's your path: ");
  return reversedShortestPath;
}

knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [7, 7]);
