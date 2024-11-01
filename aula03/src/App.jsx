//import FormState from "./components/FormState";
//import State from "./components/State";

import { useState } from "react";
import Alunos from "./components/Alunos";
import UserProvider from "./contexts/user";

export default function App() {

  const [nomeAluno, setNomeAluno] = useState("Rayssa");
  return (
    
      <UserProvider>
      <div>
      <h1>Escola</h1>
      <hr/>
      <Alunos/>
    </div>
      </UserProvider>
  );
}
