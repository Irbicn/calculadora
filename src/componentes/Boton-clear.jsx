import "../estilos/Boton-clear.css";

export default function BotonClear({ children, click }) {
  return (
    <div className="boton-clear-calculadora" onClick={click}>
      {children}
    </div>
  );
}
