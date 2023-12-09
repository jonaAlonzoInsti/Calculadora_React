import './App.css';
import logogato from "../src/imagenes/logo.gif"
import Boton from "./componentes/Boton.jsx";
import Display from './componentes/Display';
import BotonClear from './componentes/BotonClear';
import {useState} from "react";
//libreria matematica (npm install mathjs)
import {evaluate} from "mathjs";
import Borrar from './componentes/borrar';

function App() {
//estado de la memoria de un componente  (Hook)
//Declaracion de una variable de estado que hemos llamdo input 
  const[input, setInput]=useState('');
//definimos la funcion
  const agregarInput=val=>{
    setInput(input+val)
  };

  const borrarInput=()=>{
    try{
      let aux=input-input[input.length-1];
    //remover ultimo caracter ingresado
    aux=input.substring(0, input.length-1);
    setInput(aux);
    }
    catch{
      setInput(input);
    }
    
  };


  //funtion que evalua el calculo a resolver(recordar libreria mathjs)
  const calcularResultado=()=>{
    try{
      setInput(evaluate(input));
    }catch{
      setInput("SytaxisError")
    }
  };
  return (
    <div className="App">
      <div className="main-logo">
        <img
          src={logogato}
          className="logo"
          alt="logo gato"/>
      </div>
      <div className="container-calculadora">
        <Display input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput} >5</Boton>
          <Boton manejarClic={agregarInput} >6</Boton>
          <Boton manejarClic={agregarInput} >-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput} >7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput} >9</Boton>
          <Boton manejarClic={agregarInput} >*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput} >.</Boton>
          <Boton manejarClic={agregarInput} >0</Boton>
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={agregarInput} >^</Boton>
        </div>
        <div className="fila">
          {/* creamos una funcion anonima */}
          <BotonClear manejarClear={() => setInput("")}>
            Clear
          </BotonClear>
          <Borrar quitarInput={borrarInput} >Borrar</Borrar>
        </div>
      </div>
    </div>
  );
}

export default App;
