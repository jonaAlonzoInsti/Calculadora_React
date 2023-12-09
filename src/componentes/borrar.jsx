import React from "react";
import "../estilos/borrar.css";
const Borrar =(props)=>(
  <div className="boton-borrado" onClick={props.quitarInput}>
    {props.children}
  </div>
);

export default Borrar;