import "../estilos/Boton.css";

function esOperador(valor) {
  return isNaN(valor) && valor !== "." && valor !== "=";
}

export default function Boton({ children, agregarInput, calcular }) {
  return (
    <button
      className={`boton-calculadora ${
        esOperador(children) ? "operador" : ""
      }`.trimEnd()}
      onClick={(e) => (children === "=" ? calcular() : agregarInput(children))}
    >
      {children}
    </button>
  );
}
