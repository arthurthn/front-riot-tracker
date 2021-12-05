import React from 'react';
import './RecentMatchesStats.css';
import Aatrox from '../../assets/images/Aatrox.png';
import image6 from '../../assets/images/image6.png';
import image7 from '../../assets/images/image7.png';
import image8 from '../../assets/images/image8.png';
import image9 from '../../assets/images/image9.png';
import image10 from '../../assets/images/image10.png';
import image11 from '../../assets/images/image11.png';

function RecentMatchesStats() {
    return (
        <div className="containerRecentMatches">
            <div className="containWidth">
                <img src={Aatrox}/>
                <div className="differentArrays">
                    <span className="aramTitle">ARAM</span>
                    <span className="detailedRecentMatch">10/12/2021</span>
                </div>
                <div className="differentArrays">
                    <span className="aramTitle">14/13/19</span>
                    <span className="detailedRecentMatch">2.54 KDA</span>
                </div>
                <div className="differentArrays">
                    <div className="row row1">
                        <img src={image6}/>
                        <img src={image7}/>
                        <img src={image8}/>
                    </div>
                    <div className="row row2">
                        <img src={image9}/>
                        <img src={image10}/>
                        <img src={image11}/>
                    </div>
                </div>
                <div className="differentArrays">
                    <div className="winOrLossStat">
                        <span className="victoryStat">Victory</span>
                        <span>33 : 45</span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentMatchesStats;