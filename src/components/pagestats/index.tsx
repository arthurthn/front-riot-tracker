import React from 'react';
import './style.css';
import backgroundImg from '../assets/images/background_stats.jpg';
import mainPic from '../assets/images/avatarMainPic.png';
import pic1 from '../assets/images/lane_pic1.png';
import pic2 from '../assets/images/lane_pic2.png';


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
            <div className="recentGames">
                <div className="titleRecentGames">
                    <span>LAST 10 GAMES</span>
                    <div className="boxRecentGames">
                        <div className="lanesRecentGames">
                            <span>LANES</span>
                            <div className="topJungl">
                                <img src={pic1} className ="pic"/>
                                <img src={pic2} className ="pic pic2"/>
                                <div className="laneText">
                                    <div className="laneTopText">
                                        <div className="Toptitle">Top</div>
                                        <div className="winRate">Win.58%</div>
                                    </div>    
                                </div>
                        </div>
                        <div className="array">
                            <div className="laneText">
                                 <div className="laneJunglText">
                                     <div className="Toptitle">Jungl</div>
                                    <div className="winRate">Win.36%</div>
                                </div>                     
                            </div>
                        </div>
                        <div className="winRateBar">
                            <div className="emptyBar">
                            </div>
                            <div className="loadedBar">
                                <span>V</span>
                            </div>
                        </div>
                        <div className="winStats">
                            <p>Win ratio <span>.36%</span><br/>
                            Dmg <span>10 730</span>
                            <br/>Cs <span>146</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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