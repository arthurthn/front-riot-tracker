import React from 'react';
import './RegisterPage.css';
import marksman from '../assets/images/marksman.png';
import blueBlur from '../assets/images/blueBlur.png';
import LogIn from './LogIn/LogIn';

function RegisterPage() {
    return (
        <div className="backgroundRegister">
            <div className="containerRegister">
                <div className="imageAndRegister imageContainer">
                    <img src={blueBlur} className="blueBlur"/>
                    <img src={marksman} className="marksmanPng"/>
                </div>
                <div className="imageAndRegister registerArea">
                    <div className="textRegisterAbove">
                        <span>Inscription gratuite</span>
                        <p className="inscriptionTitle">Inscris-toi sur<span className="huntEye">HuntEye</span></p>
                        {/* LINK CONNECTE TOI */}
                        <span>Déjà un membre ?
                            <span className="logInLink">
                                Connecte-toi
                            </span>
                        </span>
                        <LogIn />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;