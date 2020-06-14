import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  //objeto que se pasa a componente
  const user = {
    nombre: "Delfin Espejo",
    edad: 27,
    color: "Azul",
  };
  //funcion que se pasa a un componente
  const saludarFn = (nombre, edad) => {
    //console.log("Hola " + nombre + " tiene " + edad + " años.");
    //template string
    console.log(`Hola ${nombre} tiene ${edad} años.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
