const gameBoard = () => {
  let gameBoard = new Array(7);
  return gameBoard;
};

//create 8x8 gameBoard
// add legal moves for the knight chess figure
// make sure to keep the knight from going off bounds (off the gameBoard)
// use BFS to find the shortest path
// keep track of the visited cells with new Set
// return the shortest path
