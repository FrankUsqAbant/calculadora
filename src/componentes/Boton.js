import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  if (esOperador(props.children)) {
    return (
      <div
        className="boton-contenedor operador"
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  } else {
    return (
      <div
        className="boton-contenedor"
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  }

  //Otro metodo
  /*  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  ); */
}

export default Boton;
