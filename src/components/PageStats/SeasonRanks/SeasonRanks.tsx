import React from 'react';
import './SeasonRanks.css'
import WinBarRatio from '../WinBarRatio/WinBarRatio'
import ChallengerPic from '../../assets/images/challengerPic.png'

function SeasonRanks() {
    return (
        <div className="containerPage">
            <div className="seasonRankContainer">
                <span className= "boxTitle">
                    RANG DE LA SAISON
                </span>
                <div className="box">
                    <div className="championBox">
                        <img src={ChallengerPic}/>
                    </div>
                    <div className="classSolo">
                        <span className="title">Classé solo</span>
                        <span className="className">Challenger</span>
                        <div className="winRecordSeason">
                            <span className="seasonWinStats">1,416LP</span>
                            <span> / 460V 360D</span>
                        </div>
                        <div className="winRatioText">
                            <WinBarRatio />
                            <div className="winBarRatio">
                                <span>56% </span>Win Ratio
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SeasonRanks; 