import { useState } from "react";

export default function Tateti() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (b) => {
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
    for (let [a, b2, c] of lines) {
      if (b[a] && b[a] === b[b2] && b[a] === b[c]) return b[a];
    }
    return null;
  };

  const handleClick = (i) => {
    if (board[i] || winner || !isPlayerTurn) return;
    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);
    const w = checkWinner(newBoard);
    if (w) {
      setWinner(w);
      return;
    }
    setIsPlayerTurn(false);
    setTimeout(() => maquinaMove(newBoard), 500);
  };

  const maquinaMove = (b) => {
    const empty = b
      .map((val, idx) => (val ? null : idx))
      .filter((v) => v !== null);
    if (empty.length === 0) return;
    const idx = empty[Math.floor(Math.random() * empty.length)];
    b[idx] = "O";
    setBoard([...b]);
    const w = checkWinner(b);
    if (w) setWinner(w);
    else setIsPlayerTurn(true);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
  };

  return (
    <div
      className="d-flex align-items-center flex-column justify-content-center shadow rounded"
      style={{
        minHeight: "400px",
        padding: "20px",
        maxWidth: "600px",
        margin: "200px auto",
      }}
    >
      <h2 className="mb-4">Ta-Te-Ti vs Máquina</h2>

      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ width: "180px", margin: "0 auto" }}
      >
        {board.map((cell, i) => (
          <button
            key={i}
            className="btn btn-outline-dark bg-body-tertiary m-1"
            style={{ width: "50px", height: "50px", fontSize: "20px" }}
            onClick={() => handleClick(i)}
          >
            {/* El texto usa text-body-emphasis: negro en light, blanco en dark */}
            <span className="text-body-emphasis fw-semibold">{cell}</span>
          </button>
        ))}
      </div>

      {winner && <h4 className="mt-3">Ganó: {winner}</h4>}
      {!winner && board.every((c) => c) && <h4 className="mt-3">¡Empate!</h4>}

      <button className="btn btn-dark mt-3" onClick={resetGame}>
        Reiniciar
      </button>
    </div>
  );
}
