import React from 'react'
import './MostPlayedChampions.css'
import Aatrox from '../../assets/images/Aatrox.png';
import image26 from '../../assets/images/image26.png';
import MaskGroup from '../../assets/images/MaskGroup.svg';


function MostPlayedChampions() {
    return (
        <div className="mostPlayedChampions">
            <div className="boxTitle titleMostPlayed">
                Most played champions
            </div>
            <div className="box boxMostPlayedChampions">
                <div className="imgContainerMostPlayed">
                    <div className="imgLeftPlayedChampion">
                        <img src={Aatrox} className="aatrox"/>
                        <span>Aatrox</span>
                            
                            <div className="textLeftMostPlayed">
                            <img src={MaskGroup}/>
                            <img src={image26} className="imgNumberOfTrophies"/><span>38 220</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}


export default MostPlayedChampions;