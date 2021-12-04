import React from 'react';
import './PageStats.css';
import backgroundImg from '../assets/images/background_stats.jpg';
import mainPic from '../assets/images/avatarMainPic.png';
import LastGames from './LastGames/LastGames';
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
        <SeasonRanks />
        <RecentMatches />
    </div>
    )
}

// function  pagestats() {
//     return (
//         <div>
//       <div className="cards">
//         <div className="card card-1">
      
//       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
//     </div>
//     <div className="card card-1">
      
//       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
//     </div>
//     <div className="card card-1">
      
//       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
//     </div>  
//     <div className="card card-1">
      
//       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
//     </div>
//         </div>
//         </div>
//     )
// }

export default pagestats;