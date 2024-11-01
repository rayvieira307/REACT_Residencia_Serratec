import React, {useState} from "react";

export default function State() {
 /*  let valor = 100;
 Vetor com duas variaveis e o useState muda o valor inicial */
const [valor, setValor] = useState(100);
const [texto, setTexto] = useState("Rayssa");

  function calcular() {
   setValor(valor * 2 );
  } 

   //const calcular = () => setValor(valor * 2);

  return (
    <div>
      <h1>Uso do useState</h1>
      <p>Valor: {valor}</p>
     {/*  <button onClick={() => setValor(valor * 2)}>Calcular</button> */}
     <button onClick={calcular}> Calcular </button>
     <p>{texto}</p>
     <button onClick = {() => setTexto ("Rayssa Vitoria Vieira")}>Alterar Nome</button>
    </div> 
  );
}