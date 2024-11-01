import { useState } from "react";

export default function FormState() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const[texto, setTexto] = useState("");

  function cadastrar(e) {
    e.preventDefault();
    console.log(`Dados Funcionário: ${nome} - ${email}`);
  }

  return (
    <div>
      <h1>Dados do Formulário</h1>
      <form onSubmit={cadastrar}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Preencha o nome"
          name="nome" 
          onChange={(e) => setNome(e.target.value)}
        />
     {/* //////////////////////////////////////////////////////// */}
        <label>Email:</label>
        <input
          type="text"
          placeholder="Preencha o email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      <button type="submit">Enviar</button>
      </form>

      <input 
      type = "text" 
      placeholder="Digite algo" 
      name="Texto"
      value = {texto} 
      onChange={(e) => setTexto(e.target.value)}
     />
      <p>Você digitou:{texto}</p>
    </div>
  );
}

