import React from "react";
import { Link } from "react-router";

export default function GamesPage() {
  const games = [
    {
      id: "bouncing-ball",
      title: "Bouncing Ball",
      desc: "Pelota que podés agarrar y lanzar con física simple.",
      path: "/JoaquinReinante/games/bouncing-ball",
    },
    {
      id: "tateti",
      title: "Ta-Te-Ti vs Máquina",
      desc: "Juega Ta-Te-Ti contra una máquina que elige al azar.",
      path: "/JoaquinReinante/games/tateti",
    },
    {
      id: "rps",
      title: "Piedra · Papel · Tijera",
      desc: "Clásico Piedra Papel o Tijera contra la computadora.",
      path: "/JoaquinReinante/games/piedra-papel-tijera",
    },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Games</h2>
      <div className="row">
        {games.map((g) => (
          <div key={g.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{g.title}</h5>
                <p className="card-text flex-grow-1">{g.desc}</p>
                <Link
                  to={g.path}
                  className="btn btn-dark mt-auto bg-body-tertiary text-body border"
                >
                  Play
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
