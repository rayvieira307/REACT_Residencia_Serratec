import React, { useState } from 'react'

export default function ExemploCondicional() {
    const [log, setLog] = useState(false);

    const login = () => "Login Efetuado"; 
    const logout = () => "Você saiu do Sistema"; 
     
  return (
    <div>
        <p>{log ? login() : logout()}</p>
        <button onClick={() => setLog(!log)}>{!log ? "Login" : "Logout"}</button>
        </div>
  )
}
