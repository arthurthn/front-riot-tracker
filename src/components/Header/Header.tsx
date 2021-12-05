import React from 'react';
import './Header.css'
import Logo from '../assets/logo/logo_bleu_complet.png'
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";


function Header() {
    return (
        <div className="container">
            <div className="menuGeneral">
                <img src={Logo} alt="Logo"/> 
                <div className="menuList">
                    <ul>
                        <li>
                            <Link to="/"><span>Accueil</span></Link>
                        </li>
                        <li>
                            <Link to="/classement">Classement</Link>
                        </li>
                        <li>
                            <Link to="/statistiques">Statistiques</Link>
                        </li>
                        <li>
                            <Link to="/conseils">Conseils</Link>
                        </li>
                        <li>
                            <Link to="/about">À propos</Link>
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