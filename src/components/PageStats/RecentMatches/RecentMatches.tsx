import React from 'react';
import './RecentMatches.css'
import RecentMatchesStats from '../RecentMatchesStats/RecentMatchesStats'

function RecentMatches({matchHistory}) {
    console.log(matchHistory)
    return(
        <div className="containerRecentMatch">
            <span className="boxTitle titleRecentMatches">Match recent</span>
                <div className="boxRecentMatches">
                    {matchHistory.map((match, index)=>{

                        return <RecentMatchesStats match={match} key={index}/>
                    })}
                </div>
        </div>
    )
}

export default RecentMatches;