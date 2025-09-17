import React, { useState } from "react";

export default function PiedraPapelTijera() {
  const opciones = ["Rock", "Paper", "Scissors"];

  const [playerChoice, setPlayerChoice] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);
  const [resultado, setResultado] = useState("");
  const [score, setScore] = useState({ win: 0, draw: 0, lose: 0 });

  const jugar = (eleccion) => {
    const cpu = opciones[Math.floor(Math.random() * 3)];
    setPlayerChoice(eleccion);
    setCpuChoice(cpu);

    if (eleccion === cpu) {
      setResultado("Its a Draw!");
      setScore((s) => ({ ...s, draw: s.draw + 1 }));
    } else if (
      (eleccion === "Rock" && cpu === "Scissors") ||
      (eleccion === "Paper" && cpu === "Rock") ||
      (eleccion === "Scissors" && cpu === "Paper")
    ) {
      setResultado("You Won!");
      setScore((s) => ({ ...s, win: s.win + 1 }));
    } else {
      setResultado("You Lost!");
      setScore((s) => ({ ...s, lose: s.lose + 1 }));
    }
  };

  const resetRound = () => {
    setPlayerChoice(null);
    setCpuChoice(null);
    setResultado("");
  };

  const resetScore = () => setScore({ win: 0, draw: 0, lose: 0 });

  return (
    <div
      className="d-flex align-items-center flex-column justify-content-center shadow rounded bg-body"
      style={{
        minHeight: "400px",
        padding: "20px",
        maxWidth: "600px",
        margin: "200px auto",
      }}
    >
      <h2 className="mb-3">Rock · Paper · Scissors</h2>

      {/* Marcador */}
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
        <span className="badge bg-success-subtle text-success-emphasis border border-success-subtle">
          Wins: {score.win}
        </span>
        <span className="badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle">
          Draws: {score.draw}
        </span>
        <span className="badge bg-danger-subtle text-danger-emphasis border border-danger-subtle">
          Losses: {score.lose}
        </span>
      </div>

      {/* Controles */}
      <div className="btn-group mb-3">
        {opciones.map((op) => (
          <button
            key={op}
            className="btn btn-outline-secondary btn-lg"
            onClick={() => jugar(op)}
            aria-label={op}
            title={op}
          >
            {op}
          </button>
        ))}
      </div>

      {/* Resultado */}
      {playerChoice && (
        <div className="mt-2 text-center">
          <p className="mb-1">
            You chose:{" "}
            <strong className="text-body-emphasis">{playerChoice}</strong>
          </p>
          <p className="mb-2">
            The computer chose:{" "}
            <strong className="text-body-emphasis">{cpuChoice}</strong>
          </p>
          <h4 className="text-body-emphasis">{resultado}</h4>

          <div className="d-flex gap-2 justify-content-center mt-3">
            <button className="btn btn-outline-secondary" onClick={resetRound}>
              Restart round
            </button>
            <button className="btn btn-outline-danger" onClick={resetScore}>
              Restart score
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
