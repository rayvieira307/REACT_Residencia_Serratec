import Logo from '../assets/react.svg'
export default function Time() {
    const times = ["Vasco", "Flamengo", "Botafogo", "Fluminense"]

    const pessoa = {
        nome: "Rayssa",
        idade: 19,
    }


    const dadosPessoa = (pessoa) => {
        return pessoa.nome + " - " + pessoa.idade;
    };


//Funcao que vai receber texto e retornar em maiúsculo
  const texto = (msg) => msg.toUpperCase();

    const listaTimes = times.map((time, index) =>(
                    <li  key = {index}>{time}</li>));
  
                    const soma = (a , b) => a + b;

  return (
    <div>
            <h1>Lista de Time</h1>
            <p>Olá, {dadosPessoa(pessoa)} </p>
            <p>Soma: {soma(10, 50)}</p>
            <p>Texto: {texto("Aula de React")}</p>
            <img src={Logo} alt="React" />
            {/* <img src={require('..assets/react.svg')} alt="" /> */}
          <ul>
            {listaTimes}
          </ul>
      
    </div>
  )
}
