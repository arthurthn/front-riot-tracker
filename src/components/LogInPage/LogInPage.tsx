import React from 'react';
import './LogInPage.css';
import mage from './../assets/images/mage.png';
import blueBlur from '../assets/images/blueBlur.png';
import LogIn from '../RegisterPage/LogIn/LogIn'


function LogInPage() {
    return (
        <div className="backgroundRegister">
            <div className="containerRegister">
                    <div className="imageAndRegister ">
                        <img src={blueBlur} className="blueBlur"/>
                        <img src={mage}/>
                    </div>
                    <div className="signInContainer">
                        <div className="columnSignIn">
                            <span>Re-Bienvenue</span>
                            <p className="inscriptionTitle">Connecte-toi sur<span className="huntEye">HuntEye</span></p>
                            <span>Pas de compte?<span className="logInLink">Inscris-toi</span></span>
                        </div>
                        <LogIn />
                        <div className="inscriptionDiv">
                            <button className="inscriptionButton">
                                Connexion
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LogInPage;