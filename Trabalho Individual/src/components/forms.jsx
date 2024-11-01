import { useState } from "react";

export default function Form() {
  const [altura, setAltura] = useState("");
  const[peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");

  function calcularIMC(e) {
    e.preventDefault();
    const alturaM = altura / 100; 
    const imc = peso / (alturaM * alturaM);
   /*  retorna o resultado o imc com apenas duas casas decimais */
    setResultado(imc.toFixed(2));
  
    if (imc < 18.5) {
        setClassificacao('Baixo peso');
      } else if (imc >= 18.5 && imc <= 24.9) {
        setClassificacao('Eutrofia (peso adequado)');
      } else if (imc >= 25 && imc <= 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imc >= 30 && imc <= 34.9) {
        setClassificacao('Obesidade grau 1');
      } else if (imc >= 35 && imc <= 39.9) {
        setClassificacao('Obesidade grau 2');
      } else {
        setClassificacao('Obesidade extrema');
      }
    }


  return (
    <div className="forms_style">
      <h1>Insira os seus dados :)</h1>
      <form onSubmit={calcularIMC}>
     <label>Peso KG: </label>
        <input
          type="text"
          placeholder="Insira seu peso"
          name="peso"
          onChange={(e) => setPeso(e.target.value)}
        />
      <p/>
      <label>Altura CM:</label>
      <input 
      type = "text" 
      placeholder="Digite sua altura " 
      name="altura"
      value = {altura} 
      onChange={(e) => setAltura(e.target.value)}
      />
     <p />
      </form>
       <button onClick={calcularIMC}>Calcular IMC</button>
    
   {/*  So envia o resultado se for true e tiver um valor para o mesmo */}
      {resultado && (
        <div>
          <h2>Resultado do IMC: {resultado}</h2>
          <h2>Classificação: {classificacao}</h2>
        </div>
      )}
      </div>
  );
}