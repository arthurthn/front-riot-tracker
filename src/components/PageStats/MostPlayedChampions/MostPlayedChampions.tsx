import React from 'react'
import './MostPlayedChampions.css'
import Aatrox from '../../assets/images/Aatrox.png';
import garen from '../../assets/images/garen.png';
import LeeSin from '../../assets/images/LeeSin.png';
import image25 from '../../assets/images/image25.png';
import image26 from '../../assets/images/image26.png';
import MaskGroup from '../../assets/images/MaskGroup.svg';
import sideChampionLine from '../../assets/images/sideChampionLine.png';
import sideChampionLineRight from '../../assets/images/sideChampionLineRight.png';


function MostPlayedChampions() {
    return (
        <div className="mostPlayedChampions">
            <div className="boxTitle titleMostPlayed">
                Most played champions
            </div>
            <div className="box boxMostPlayedChampions">
                <img src={sideChampionLine} />
                <div className="imgContainerMostPlayed">
                <div className="imgPlayedChampion">
                        <img src={Aatrox} className="championImage aatrox"/>
                        <span>Aatrox</span>
                            <div className="textMostPlayed">
                            <img src={image26} className="ChampionImage"/>
                            <div className="trophySystem">
                            <img src={MaskGroup} className="imgNumberOfTrophies"/><span>38 220</span>
                            </div>  
                        </div>
                     </div>
                     <div className="imgPlayedChampion">
                        <img src={garen} className="championImage garen"/>
                        <span>Garen</span>
                            <div className="textMostPlayed">
                            <img src={image25} className="ChampionImage middleChampionImage"/>
                            <div className="trophySystem">
                            <img src={MaskGroup} className="imgNumberOfTrophies" /><span>20 140</span>
                            </div>  
                        </div>
                     </div>
                     <div className="imgPlayedChampion">
                        <img src={LeeSin} className="championImage aatrox"/>
                        <span>Lee Sin</span>
                            <div className="textMostPlayed">
                            <img src={image26} className="ChampionImage"/>
                            <div className="trophySystem">
                            <img src={MaskGroup} className="imgNumberOfTrophies"/><span>50 860</span>
                            </div>  
                        </div>
                     </div>
                </div>
                <img src={sideChampionLineRight}/>
            </div>
        </div>
    )
}


export default MostPlayedChampions;