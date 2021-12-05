import React from 'react';
import './LogIn.css';

function LogIn() {
    return (
        <div className="logInFormContainer">
            <span>pseudo riot</span>
            <div className="pseudoForm">
                <input type="username" placeholder= "Voster#Euw"/>
            </div>
            <span>mot de passe</span>
            <div className="pseudoForm">
                <input type="username" placeholder= "Password123!"/>
            </div>
        </div>
    )
}

export default LogIn;

