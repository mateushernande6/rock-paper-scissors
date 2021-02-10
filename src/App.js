import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/player/Player";
import Placar from "./components/placar/Placar";
import ShowPlay from "./components/showPlay/ShowPlay";

function App() {
  let [roboPlay, setRoboplay] = useState(0);
  let [playerPlay, setPlayerPlay] = useState(0);
  let [playerWin, setPlayerWin] = useState(0);
  let [roboWin, setRoboWin] = useState(0);

  let[jogadas, setJogadas] = useState(0)

  const playRobo = () => {
    let play = Math.floor(Math.random() * 3 + 1);
    setRoboplay((roboPlay = play));
  };

  const verify = () => {
    if (roboPlay === 1 && playerPlay === 2) {
      setPlayerWin(playerWin + 1);
    }
    if (roboPlay === 2 && playerPlay === 3) {
      setPlayerWin(playerWin + 1);
    }
    if (roboPlay === 3 && playerPlay === 1) {
      setPlayerWin(playerWin + 1);
    }
    if (roboPlay === playerPlay) {
      console.log("Empate");
    }

    if (roboPlay === 2 && playerPlay === 1) {
      setRoboWin(roboWin + 1);
    }
    if (roboPlay === 3 && playerPlay === 2) {
      setRoboWin(roboWin + 1);
    }
    if (roboPlay === 1 && playerPlay === 3) {
      setRoboWin(roboWin + 1);
      
    }
  };

  useEffect(() => {
    if (playerPlay !== 0) {
     verify()
    }
  }, [roboPlay, playerPlay, jogadas]);

  const handlePedra = () => {
    setPlayerPlay((playerPlay = 1));
    playRobo();
    setJogadas(jogadas + 1)
  };

  const handlePapel = () => {
    setPlayerPlay((playerPlay = 2));
    playRobo();
    setJogadas(jogadas + 1)
  };

  const handleTesoura = () => {
    setPlayerPlay((playerPlay = 3));
    playRobo();
    setJogadas(jogadas + 1)
  };
  // console.log(roboWin);
  // console.log(playerWin);
  return (
    <div className="App">
      <header className="App-header">
        <Placar playerWin={playerWin} roboWin={roboWin} />
        <Player
          pedra={handlePedra}
          papel={handlePapel}
          tesoura={handleTesoura}
        />
        <ShowPlay player={playerPlay} robo={roboPlay} />
      </header>
    </div>
  );
}

export default App;
