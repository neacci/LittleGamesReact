import React from "react";
import "./App.css";

import game1 from "./game1.png";
import game2 from "./game2.png";
import game3 from "./game3.png";
import game4 from "./game4.png";
import locked from "./locked.svg";

function App() {
  const bgs = [game1, game2, game3, game4];
  const games = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    isLocked: i >= 8,
    backgroundImage: bgs[i % 3],
  }));

  const handleClick = (game) => {
    if (!game.isLocked) {
      console.log(`Game ${game.id} selected.`);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Games</h1>
      </header>
      <div className="game-container">
        {games.map((game) => (
          <div
            key={game.id}
            className={`game-box ${game.isLocked ? "locked" : ""}`}
            onClick={() => handleClick(game)}
            style={{
              backgroundImage: `url(${game.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {game.isLocked ? (
              <img
                src={locked}
                className="lock"
                style={{ width: "50px", height: "50px" }}
              />
            ) : (
              ` ${game.id}`
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
