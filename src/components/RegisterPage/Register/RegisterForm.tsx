import React, { useState } from 'react';
import {signUpUser} from '../../../api/index'
import { useNavigate } from 'react-router';



const LoginForm = () =>{

    const navigate = useNavigate()
    const [summonerName, setSummonerName] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = async (e) => {
        e.preventDefault()
        const res = await signUpUser(summonerName, password)
        console.log(res.success)
        if(res.success) navigate("/login")
    }
    return(
        <form className="logInFormContainer" onSubmit={submitForm}>
            <span>pseudo riot</span>
            <div className="pseudoForm">
                <input type="username" placeholder= "Voster#Euw" value={summonerName} onChange={(e)=> {setSummonerName(e.target.value)}} />
            </div>
            <span>mot de passe</span>
            <div className="pseudoForm">
                <input type="password" placeholder= "Password123!" value={password} onChange={(e)=> {setPassword(e.target.value)}} />
            </div>
            <div className="inscriptionDiv">
                <button className="inscriptionButton" type="submit"  >
                    Inscription
                </button>
            </div>
        </form>
    )
}

export default LoginForm