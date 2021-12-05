import React from 'react';
import './LastGames2.css';
import Top from '../../assets/images/lane_pic1.png'
import Jungl from '../../assets/images/lane_pic2.png'

function LastGames2() {
    return(
        <div className="seasonRankContainer seasonLastGames">
            <div className= "boxTitle titleLastGames">
                <span>LAST 10 GAMES</span>
            </div>
            <div className="boxLastGames">
                <div className="darkerBox laneDarkBox ">
                    <div className="topOrJungl">
                    <span className= "titleTop" >LANES</span>
                        <div className="topAndJungl">
                        <div className="topLane">
                            <img src={Top}/>
                            <span className="underLane">Top</span>
                            <span className="winPercentageTop">Win.56%</span>
                            <span className="underLane">Dmg 10 730</span>
                        </div>
                        <div className="junglLane">
                            <img src={Jungl}/>
                            <span className="underLane">Top</span>
                            <span className="winPercentageTop">Win.30%</span>
                            <span className="underLane">Cs 146</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="darkerBox winRateDarkBox">
                    <div className="winOrLossBar">
                        <div className="emptyWinBar">
                            <div className="fillingWinBar"></div>
                        </div>
                    </div>
                </div>
                <div className="darkerBox ChampionsWinRateDarkBox">
                    <div className="gradientLineContainer">
                        <div className="gradientHorizontalLines"></div>
                        <div className="gradientVerticalDiv">
                            <div className="gradientVerticalLines"></div>
                            <div className="gradientVerticalLines gradientVerticalMiddleLine"></div>
                            <div className="gradientVerticalLines"></div>
                        </div>
                    </div>
                        <div className="gradientCircles">
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LastGames2;