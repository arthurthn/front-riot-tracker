import React from 'react';
import './Header.css'
import Logo from '../assets/logo/logo_bleu_complet.png'
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Homepage from '../homepage';


function Header() {
    return (
        <div className="container">
            <div className="menuGeneral">
                <img src={Logo} alt="Logo"/> 
                <div className="menuList">
                    <ul>
                        <li>
                            <a href="/"><span>Accueil</span></a>
                        </li>
                        <li>
                            <a href="#">Classement</a>
                        </li>
                        <li>
                            <a href="#">Statistiques</a>
                        </li>
                        <li>
                            <a href="#">Conseils</a>
                        </li>
                        <li>
                            <a href="#">À propos</a>
                        </li>
                    </ul>
                    
                </div>
                <div className="menuButtons">
                        <button className="ButtonInscription">Inscription</button>
                        <button className="ButtonConnexion">Connexion</button>
                </div>
            </div> 
        </div>

    );
}

export default Header;