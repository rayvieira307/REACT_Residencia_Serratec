import React from 'react'

//exemplo de desestruturacao e novo metodo de usar o props 
//passando os parametros no parenteses
export default function Aluno({nome, idade, profissao}) {
  return (
    <div>
         <p>Nome: {nome}</p>
         <p>Idade: {idade}</p>
         <p>Profissão: {profissao}</p>
    </div>
  );
}
