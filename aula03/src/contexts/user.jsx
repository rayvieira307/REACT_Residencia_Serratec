import {createContext, useState} from 'react';

export const UserContext = createContext({});

function UserProvider({children}) {
    const [nomeAluno, setNomeAluno] = useState ("Carlos");
    const [totalAlunos, setTotalAlunos] = useState(1000);
    return (
        
    <UserContext.Provider value = {{nomeAluno, setNomeAluno, totalAlunos, setTotalAlunos }}>
        {children}
    </UserContext.Provider>

    )
}

export default UserProvider;