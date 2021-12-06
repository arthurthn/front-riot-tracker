import React from 'react';
import './UserProfile.css';
import avatarMainPic from '../../assets/images/avatarMainPic.png';
import arrowBack from '../../assets/images/arrowBack.svg';
import backgroundImg from '../../assets/images/background_stats.jpg';
;
function UserProfile() {
    return (
        <div className="usernameInterface">
        <div className="usernameBox">
            <div className="backgroundUsername">
                <img src={backgroundImg}/>
                <div className="gradient darkerGradient"></div>
            </div> 
            {/* <div className="returnButton">
                <img src={arrowBack}/>
            </div> */}
            <img src={avatarMainPic} className="avatarMainPic"/>
                <div className="usernameAndLevel">
                    <span className="rankedGame">Kimiri The Best</span>
                    <span className="lossReveal">Défaite <span className="summonerLevel">18-22</span></span>
                    <span className="howLongAgo">Il y a 8 jours</span>
                </div>
            </div>
        
        </div>
    )
}



export default UserProfile;