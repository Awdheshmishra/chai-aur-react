import React from "react";
import UserContext from '../context/UserContext'
import { useState } from "react";
import { useContext } from "react";

function Login(){
    const [username, setUsername] = useState('')
    const [passwrod, setPassword] =  useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,passwrod})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />
            {" "}
            <input type="text" value={passwrod} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login