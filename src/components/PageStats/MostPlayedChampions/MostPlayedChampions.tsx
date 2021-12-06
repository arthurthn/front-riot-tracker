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


function MostPlayedChampions({userDatas}) {
    console.log(userDatas.championsData)
    userDatas.championsData.map((champion, index) =>{
        console.log(champion, index)
    })
    return (
        <div className="mostPlayedChampions">
            <div className="boxTitle titleMostPlayed">
                Most played champions
            </div>
            <div className="box boxMostPlayedChampions">
                <img src={sideChampionLine} />
                <div className="imgContainerMostPlayed">
                    {userDatas.championsData.map((champion, index) =>{
                        return <ChampionData champion={champion} key={index} size={index == 1 ? 1.3 : 1}/>
                    })}
                </div>
                <img src={sideChampionLineRight}/>
            </div>
        </div>
    )
}

const ChampionData = ({champion, size}) =>{
    return(
        <div className="imgPlayedChampion">
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/${champion.championName}.png`} style={{width : `${60 * size}px` }} className="championImage aatrox"/>
            <span>{champion.championName}</span>
            <div className="textMostPlayed">
                <img src={image26}  style={{width : `${60 * size}px` }} className="ChampionImage"/>
                <div className="trophySystem">
                    <img src={MaskGroup} className="imgNumberOfTrophies"/><span>{champion.championPoints}</span>
                </div>  
            </div>
        </div>
    )
}

export default MostPlayedChampions;