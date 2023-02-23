import "../estilos/Logo.css";
import logo from "../imagenes/freecodecamp-logo.png";

export default function () {
  return (
    <div className="logo-contenedor">
      <img className="logo" src={logo} alt="freecodecamp" />
    </div>
  );
}
