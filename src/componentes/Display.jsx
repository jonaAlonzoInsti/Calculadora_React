//Componente definido por una funcion flecha

import React from "react";
import "../estilos/Display.css";
//Sintaxis de  destructurracion ({})
//=> indicamos que retornaremos el valor a continuacion
const Display= ({input})=>(
  //estructura del componente
  <div className="input">
    {input}
  </div>

);

export default Display;