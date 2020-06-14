import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //estado
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);
  //hook state
  const encenderApagar = () => {
    //console.log("Encender/Apagar");
    //setStateCar(!stateCar);
    //pedir el estado a la funcion setStateCar
    setStateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };

  useEffect(() => {
    console.log("Total clicks: " + contar);
  }, [contar]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El auto esta {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encender/Apagar</button>
      </header>
    </div>
  );
}

export default App;
