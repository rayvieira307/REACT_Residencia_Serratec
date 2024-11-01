import React, { useEffect, useState } from 'react'

export default function ExemploFetch() {

const [user, setUser] = useState({});

    useEffect(() => {
     fetch("https://api.github.com/users/rayvieira307")
     .then((resposta) => resposta.json())
     .then((json) => setUser(json))
     .catch ("Problema na requisição")
    },[]);

  return (

    <div>
        <h1>Dados do Usuario</h1>
       <hr />
       <p>Login: {user.login}</p>
       <p>Link: {user.html_url}</p>
       <img src={user.avatar_url} alt="Foto" />
    </div>
  );
}
