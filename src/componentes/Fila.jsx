import "../estilos/Fila.css";
import Boton from "./Boton";

export default function Fila({ buttons, agregarInput, calcular }) {
  return (
    <div className="fila-calculadora">
      {buttons.map((button) => (
        <Boton
          key={"boton-calculadora" + button}
          calcular={calcular}
          agregarInput={agregarInput}
        >
          {button}
        </Boton>
      ))}
    </div>
  );
}
