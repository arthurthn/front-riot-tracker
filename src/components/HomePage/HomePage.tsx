import React , { useState }  from 'react';
import './HomePage.css';
import backgroundImg from '../assets/images/page_accueil.jpg';
import riotSVG from '../assets/images/riotGameSVG.svg';
import SearchBar from './SearchBar/SearchBar';




function Homepage() {


    return (
        <div className="background">
            <img src={backgroundImg} className="background-image backgroundHomePage"/>
            <div className="gradient lighterGradient"></div>
            <div className = "bodyContainer">
                <div className="mainMessage">
                  Show the world your <span>League of Legends skills</span>
                </div>
                <SearchBar/>
                <div className="line">
                </div>
                <div className="line secondLine">
                </div>
                <div className="buttonOr"><span>or</span></div>
                <div className="buttonSignIn">
                    <img src={riotSVG} className="riotMenu"/>
                    <span>Sign in with Riot ID</span>
                </div>
                <span className= "apostrophe">*By signing in you acknowledge that your profile becomes public.</span>
                <div className= "numberOfPlayersTracked">
                Already
                    <span> 342,300,000 </span>
                  Players Tracked
                </div>
            </div>
        </div>
    )
}


export default Homepage;