import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //estado
  const [stateCar, setStateCar] = useState(false);
  //hook state
  const encenderApagar = () => {
    console.log("Encender/Apagar");
    //setStateCar(!stateCar);
    //pedir el estado a la funcion setStateCar
    setStateCar((prevValue) => !prevValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El auto esta {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={encenderApagar}>Encender/Apagar</button>
      </header>
    </div>
  );
}

export default App;
