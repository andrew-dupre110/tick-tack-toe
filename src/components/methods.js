const generateBoard = (size) => {
  const newBoard = [];

  for (let i = 0; i < size; i++) {
    newBoard.push([...Array(size)]);
  }

  return newBoard;
};

const checkBoardCompleted = (board, boardSize) => {
  let isCompleted = true;

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (!board[i][j]) {
        isCompleted = false;
      }
    }
  }

  return isCompleted;
};

const checkHorizontal = (board) => {
  for (let row of board) {
    let rowSet = new Set(row);

    if (rowSet.size == 1 && !rowSet.has(undefined)) {
      return true;
    }
  }
};

const rowsToColumns = (board) => {
  let newArray = [];
  let counter = 0;
  while (counter < board.length) {
    let newRow = [];
    for (let row = 0; row < board.length; row++) {
      newRow.push(board[row][counter]);
    }
    newArray.push(newRow);
    counter++;
  }

  return newArray;
};

const diagonalColumns = (board) => {
  let newArray = [[], []];
  let increment = 0;
  let decrement = board.length - 1;

  while (increment < board.length) {
    newArray[0].push(board[increment][increment]);
    newArray[1].push(board[increment][decrement]);

    increment++;
    decrement--;
  }

  return newArray;
};

const checkForWin = (board) => {
  if (checkHorizontal(board)) {
    return true;
  }
  if (checkHorizontal(rowsToColumns(board))) {
    return true;
  }
  if (checkHorizontal(diagonalColumns(board))) {
    return true;
  }
};

export { generateBoard, checkBoardCompleted, checkForWin };
