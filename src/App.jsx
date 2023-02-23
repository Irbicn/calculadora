import "./App.css";
import Fila from "./componentes/Fila";
import { botones } from "./utiles/botones";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/Boton-clear";
import { useState } from "react";
import { evaluate } from "mathjs";
import Logo from "./componentes/Logo";

function esOperador(val) {
  return (
    val === "." || val === "/" || val === "*" || val === "+" || val === "-"
  );
}

export default function App() {
  const [input, setInput] = useState("");
  const [operador, setOperador] = useState(false);

  function agregarInput(val) {
    if (esOperador(val)) {
      if (!operador) {
        setInput(input + val);
      }
      setOperador(true);
      return;
    }
    setInput(input + val);
    setOperador(false);
  }

  function borrar() {
    setInput("");
  }
  function calcular() {
    if (esOperador(input[0]) && input[0] !== ".") {
      setOperador(false);
      alert("no puede iniciar con un operador");
      return setInput("");
    }
    if (input) {
      setInput(evaluate(input));
    }
  }

  return (
    <div className="App">
      <Logo />
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        {botones.map((filas) => (
          <Fila
            calcular={calcular}
            agregarInput={agregarInput}
            key={`filas-calculadora-${filas[0]}`}
            operador={operador}
            buttons={filas}
          />
        ))}
        <BotonClear click={borrar}>clear</BotonClear>
      </div>
    </div>
  );
}
