import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user'

export default function Nome() {
    const {nomeAluno, setNomeAluno} = useContext(UserContext);
  return (
    <div>
        <h1>Bem vindo(a) {nomeAluno}</h1>
       <button onClick={() => setNomeAluno("Vitória")}>Trocar Nome</button> 
    </div>
  )
}
