import React from 'react';
import './PageStats.css';
import backgroundImg from '../assets/images/background_stats.jpg';
import mainPic from '../assets/images/avatarMainPic.png';
// import LastGames from './LastGames/LastGames';
import LastGames2 from './LastGames2/LastGames2';
import SeasonRanks from './SeasonRanks/SeasonRanks';
import RecentMatches from './RecentMatches/RecentMatches';


function pagestats() {
    return (
        <div className="background-image">
            <img src={backgroundImg} className="background-image"/>
            <div className="gradient"></div>
            <div className="user">
                <img src={mainPic} className = "mainPic"/>
                <div className="usernameText">Kimiri The Best</div>
                <div className="userLevel">Summoner level <span>399</span></div>
            </div>
        {/* <LastGames /> */}
        <div className="containerComponent">
            <div className="row">
                <SeasonRanks />
                <LastGames2 />
            </div>
                <RecentMatches />
        </div>
    </div>
    )
}


export default pagestats;