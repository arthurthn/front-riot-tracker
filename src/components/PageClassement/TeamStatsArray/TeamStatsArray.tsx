import React from 'react';
import './TeamStatsArray.css'
import RankedStats from './RankedStats/RankedStats'

function TeamStatsArray() {
    return (
        <div className="arrayContainer">
            <div className="arrayStats">
                <div className="arrayBigCriteria">
                    <div className="arrayCriterias">
                        <span className="firstCriteria">Nom</span>
                        <span>KDA</span>
                        <span>Degats</span>
                        <span>CS</span>
                    </div>  
                    <span>Items</span>
                </div>
                <div className="rankedStatsDiv">
                    <RankedStats />
                    <RankedStats />
                    <RankedStats />
                    <RankedStats />
                    <RankedStats />
                </div>
            </div>
        </div>
        )
}

export default TeamStatsArray;