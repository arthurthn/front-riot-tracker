import React from 'react';
import './Header.css'
import Logo from '../assets/logo/logo_bleu_complet.png'
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";


function Header() {
    return (
        <div className="container">
            <div className="menuGeneral">
                <Link to="/"><img src={Logo}/></Link> 
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
                <Link to="/register">
                    <button className="ButtonInscription">Inscription</button>
                </Link>
                <Link to="/login">
                        <button className="ButtonConnexion">Connexion</button>
                </Link>
                </div>
            </div> 
        </div>

    );
}

export default Header;