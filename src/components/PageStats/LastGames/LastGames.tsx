import React from 'react';
import './LastGames.css';
import Top from '../../assets/images/lane_pic1.png'
import Jungl from '../../assets/images/lane_pic2.png'

function LastGames({lastGamesStats}) {
    console.log(lastGamesStats)
    return(
        <div className="seasonLastGames">
            <div className= "boxTitle titleLastGames">
                <span>LAST 10 GAMES</span>
            </div>
            <div className="boxLastGames">
                <div className="darkerBox laneDarkBox ">
                    <div className="topOrJungl">
                    <span className= "titleTop" >LANES</span>
                        <div className="topAndJungl">
                        <div className="topLane">
                            <img src={`/lanes/${lastGamesStats.mostPlayedLanes[0].name.toLowerCase()}.png`}/>
                            <span className="underLane">{lastGamesStats.mostPlayedLanes[0].name}</span>
                            <span className="winPercentageTop">Win.{Math.round(lastGamesStats.mostPlayedLanes[0].winRatio * 100)}%</span>
                            <span className="underLane">Dmg {Math.round(lastGamesStats.mostPlayedLanes[0].dmgDealt)}</span>
                        </div>
                        <div className="junglLane">
                            <img src={`/lanes/${lastGamesStats.mostPlayedLanes[1].name.toLowerCase()}.png`}/>
                            <span className="underLane">{lastGamesStats.mostPlayedLanes[1].name}</span>
                            <span className="winPercentageTop">Win.{Math.round(lastGamesStats.mostPlayedLanes[1].winRatio * 100)}%</span>
                            <span className="underLane">Dmg {Math.round(lastGamesStats.mostPlayedLanes[1].dmgDealt)}</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="darkerBox winRateDarkBox">
                    <div className="winOrLossBar">
                        <div className="emptyWinBar">
                            <div className="fillingWinBar" style={{height : `${Math.round(lastGamesStats.wins / 10 * 100) }%`}}></div>
                        </div>
                    </div>
                </div>
                <div className="darkerBox ChampionsWinRateDarkBox">
                  
                    <div className="gradientCircles"></div>
                </div>
            </div>
        </div>
    )
}

export default LastGames;