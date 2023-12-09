import React from "react";
import "../estilos/Boton.css";

function Boton(props){

  //mediante esta funcion verificamos que el num de la calculadora no sea un operador 
  // devuelve un True o False
  const esOperador=valor=>{
    // (!==) comparacion estricta
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  }

  return(
    //`` plantillas literales
    //agrehamos codigo de Js ${}
    //con el metodo trim() borramos espacios al inicio trimEnd() al final
    <div className={`main-boton ${esOperador(props.children) ? "operador" : " "}`.trimEnd()}
    //funcion dentro de las llaves
    // props.manejarClic(props.children) llamdo a una funcion
    // ()=>props.manejarClic(props.children) aqui si que escribimos una funcion es necesario =>
    //una funcion que llama a otra funcion
   onClick={()=>props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;