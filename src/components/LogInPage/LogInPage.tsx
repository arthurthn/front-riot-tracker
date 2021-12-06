import React, { useState } from 'react';
import './LogInPage.css';
import mage from './../assets/images/mage.png';
import blueBlur from '../assets/images/blueBlur.png';
import LoginForm from './LogIn/LoginForm';
import {Link} from "react-router-dom"


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
                            <Link to="/register">Pas de compte?<span className="logInLink">Inscris-toi</span></Link>
                        </div>
                        <LoginForm />
                        
                    </div>
                </div>
            </div>
    )
}



export default LogInPage;