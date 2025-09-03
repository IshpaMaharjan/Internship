import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {

   const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard]= useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const handleClick = (index) => {
    if (board[index]|| winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    setHistory([...history, newBoard]);

    for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        return;
      }
  }
};

  const loadHistoryState = (index) => {
    const historyBoard = history[index];
    setBoard(historyBoard);

    const xCount = historyBoard.filter(cell => cell === "X").length
    const oCount = historyBoard.filter(cell => cell === "O").length
    setIsXTurn(xCount===oCount);

    let historyWinner = null;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (historyBoard[a] && historyBoard[a] === historyBoard[b] && historyBoard[a] === historyBoard[c]) {
        historyWinner = historyBoard[a];
        break;
      }
    }
    setWinner(historyWinner);
  };

  return (
    <div className="tic-tac-toe-container">
    <div>
      <h2> Next Player: {isXTurn? "X" : "O"}</h2>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={()=> handleClick(index)}>
            {cell}
          </div>
        ))}
    </div>
    <h3>Winner is: {winner}</h3>
    </div>

    <div className="history-section">
        <h3>Move History</h3>
        <div className="history-list">
          {history.map((boardState, index) => (
            <div 
              key={index} 
              className={`history-item ${index === history.length - 1 ? "current" : ""}`}
              onClick={() => loadHistoryState(index)}
            >
              <span>Move {index}</span>
              <div className="mini-board">
                {boardState.map((cell, cellIndex) => (
                  <span 
                    key={cellIndex} 
                    className={`mini-cell ${cell || "empty"}`}
                  >
                    {cell || ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
