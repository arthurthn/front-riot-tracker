import React from 'react';
import './SeasonRanks.css'
import WinBarRatio from '../WinBarRatio/WinBarRatio'
import ChallengerPic from '../../assets/images/challengerPic.png'

function SeasonRanks({userDatas}) {
    const winRatio = Math.round(userDatas.leagueData.wins/ (userDatas.leagueData.wins + userDatas.leagueData.losses) * 100)
    return (
            <div className="seasonRankContainer">
                <span className= "boxTitle">
                    rang de la saison
                </span>
                <div className="box">
                    <div className="darkBox championBox">
                        {/* <img src={`./rankEmblemes/Emblem_${userDatas.leagueData.tier}.png`}/> */}
                        <img src={`/rankEmblemes/Emblem_${userDatas.leagueData.tier}.png`}/>
                    </div>
                    <div className="classSolo">
                        <span className="title">Classé solo</span>
                        <span className="className">{userDatas.leagueData.tier} {userDatas.leagueData.rank}</span>
                        <div className="winRecordSeason">
                            <span className="seasonWinStats">{userDatas.leagueData.leaguePoints} LP</span>
                            <span> / {userDatas.leagueData.wins}V {userDatas.leagueData.losses}D</span>
                        </div>
                        <div className="winRatioText">
                            <WinBarRatio winRatio={winRatio}/>
                            <div className="winBarRatio">
                                <span>{winRatio}% </span>Win Ratio
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default SeasonRanks; 