import { useEffect, useState } from "react";

export default function ExemploEffect() {
  const [cont, setCont] = useState(0);
  const [nome, setNome] = useState("");
  const [hora, setHora] = useState(new Date());
  //Sempre que houver uma atualização na aplicação ele executa o useEffect
  useEffect(() => {
    console.log("Executou useEffect");
  },[cont]); //quando tiver um array vazio como parametro ele executa somente uma vez ao carregar a página.
  //Colocando o cont a cada atualizacao de cont exceuta o useEffect

  useEffect(() => {
    /* setTimeout(() => {
        setNome("Rayssa");
    }, 5000); */
    setInterval(() => {
    setHora(new Date());
    }, 1000);
  });

  return (
    <div>
      <h1>useEffect</h1>
      <hr />
      <h2>Contador:{cont}</h2>
      <button onClick={() => setCont(cont + 1)}>Incrementar</button>
     {/*  <p>Nome: {nome}</p> */}
     <p>Hora: {hora.toLocaleTimeString()}</p>
    </div>
  );
}