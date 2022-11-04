import React from "react";
import '../estilos/Boton.css';
function Boton(props) {
  const esOperador = (val) => {
    return isNaN(val) && (val !== ".") && (val !== "=");
  };
  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}>
        {props.children}
    </div>
  );
}

export default Boton;