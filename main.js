const gameboard = () => {
  let board = [];

  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i][j] = false;
    }
  }

  return board;
};
