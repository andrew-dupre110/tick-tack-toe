import React, { useState } from 'react';
import { generateBoard, checkBoardCompleted, checkForWin } from './methods';

const CELL_SIZE = 50;
const BOARD_SIZE = 3;

const PLAYER_1_ICON = '🤠';
const PLAYER_2_ICON = '🐮';

const Board = () => {
  const [board, setBoard] = useState(generateBoard(BOARD_SIZE));
  const [marker, setMarker] = useState(true);

  const resetBoard = () => {
    setMarker(true);
    setBoard(generateBoard(BOARD_SIZE));
  };

  const handleClick = (rowIndex, cellIndex) => {
    let boardCopy = [...board];
    const clickedCell = board[rowIndex][cellIndex];

    if (clickedCell) return;

    boardCopy[rowIndex][cellIndex] = marker ? PLAYER_1_ICON : PLAYER_2_ICON;

    setBoard(boardCopy);

    if (checkForWin(board)) {
      alert(`🎉 ${marker ? PLAYER_1_ICON : PLAYER_2_ICON} Wins 🎉`);
      return resetBoard();
    } else if (checkBoardCompleted(board, BOARD_SIZE)) {
      alert('Its a draw 🤝');
      return resetBoard();
    }

    setMarker((prev) => !prev);
  };

  return (
    <div>
      {board.map((row, row_id) => (
        <div key={row_id} style={{ display: 'flex', background: '#e9e9e9' }}>
          {row.map((cell, cell_id) => (
            <div
              key={cell_id}
              style={{
                display: 'grid',
                placeItems: 'center',
                border: '1px solid black',
                height: CELL_SIZE,
                width: CELL_SIZE,
                cursor: 'pointer',
              }}
              onClick={() => handleClick(row_id, cell_id)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
