import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // Entrada, Rodando, Fim
  const [estado, setEstado] = useState("ENTRADA");

  //palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>;
  }

  const menor = () => {
    setNumPalites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <button onClick={iniciarJogo}> Iniciar Novamente</button>
      </div>
    );
  }

  // de 0 a 300
  // palpites que a maquina deu

  return (
    <div className="App">
      <p>O Seu número é {palpite}?</p>
      <p>
        Min: {min}/ Max: {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
