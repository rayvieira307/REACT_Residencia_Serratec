
import Aluno from './components/Aluno';
import AppClasse from './components/AppClasse';
import Botao from './components/Botao';
import Button from './components/Button';
//import Caixa from './components/Caixa';
import Carro from './components/Carro';
import Curso from './components/Curso'
import Tarefa from './components/Tarefa';
import "./index.css";

export default function App() {
  const texto = {
    color: "#fff",
    fontSize: "2em"
  };



  return (
    <div>
      <Curso nome = "React" />
      <Botao texto = "Deseja Assinar?"/>
      <Aluno nome = "Rayssa Vitória Vieira" idade = "19" profissao = "Programadora"/>
      <Tarefa titulo = "Criar componente" descricao = "Props" estado = {false} />
      <Carro modelo = "Honda" ano = {2005}/>
      <h1>Tipos de Estilo</h1>
      <p>Estilo do Arquivo</p>
      <h2 style = {{color: "pink", fontSize: "4em"}}>Estilo Inline</h2>
      <h2 style = {texto}>Estilo incorporado</h2>
     {/*  <Caixa cor ="blue"/> */}
      <Button/>
      <button className='button'> Clique Aqui2</button>
      <AppClasse curso = "React Classe" />
    </div>
  );
}
