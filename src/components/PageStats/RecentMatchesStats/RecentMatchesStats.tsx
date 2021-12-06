import React from 'react';
import './RecentMatchesStats.css';
import Item from '../../Item'

function RecentMatchesStats({match}) {
    console.log(match)
    function msToTime(s) {
        // let ms = duration.toString()
        const secondes = Math.floor(((s / 60) % 1 ) * 60)
        const minutes = (s / 60) - ((s / 60) % 1 )
        const hours = minutes / 60 < 1 ? 0 : Math.floor(minutes / 60)
        console.log(secondes, minutes, hours)
        return `${hours > 1 ? `${hours}:` : ''}${minutes}:${secondes}`
      }
    return (
            <div className="containWidth">
                <img className="champion-img" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/${match.championName}.png`}/>
                <div className="differentArrays">
                    <span className="aramTitle">{match.gameMode}</span>
                    <span className="detailedRecentMatch">{new Date(match.gameDate).toLocaleString('fr-FR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</span>
                </div>
                <div className="differentArrays">
                    <span className="aramTitle">{match.kills}/{match.deaths}/{match.assists}</span>
                    <span className="detailedRecentMatch">{Math.round(((match.kills + match.assists) / match.deaths ) * 100) / 100} KDA</span>
                </div>
                <div className="differentArrays">
                    <div className="row row1">
                        {match.item1 ? <Item item={match.item1} size={30}/> : null}
                        {match.item2 ? <Item item={match.item2} size={30}/> : null}
                        {match.item3 ? <Item item={match.item3} size={30}/> : null}
                    </div>
                    <div className="row row2">
                        {match.item4 ? <Item item={match.item4} size={30}/> : null}
                        {match.item5 ? <Item item={match.item5} size={30}/> : null}
                        {match.item6 ? <Item item={match.item6} size={30}/> : null}
                    </div>
                </div>
                <div className="differentArrays">
                    <div className="winOrLossStat">
                        <span className="victoryStat" style={{ color : !match.win ? "red" : '#00B6CF'}}>{match.win ? "Victory" : 'Defeat'}</span>
                        <span>{msToTime(match.gameDuration)}</span>
                        
                    </div>
                </div>
            </div>
    )
}

export default RecentMatchesStats;