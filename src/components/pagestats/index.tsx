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
                                    <div className="laneNameTitle">
                                        Top
                                    </div>
                                    <div className="laneNameTitle laneNameJungl">Jungl</div>
                                </div>
                            </div>
                        </div>
                        <div className="array">
                            <span>poop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pagestats;