import React from 'react';
import './TeamStatsArray.css'

function TeamStatsArray() {
    return (
        <div className="arrayContainer">
            <div className="arrayStats">
                <div className="arrayCriterias">
                    <span className="firstCriteria">Nom</span>
                    <span>KDA</span>
                    <span>Degats</span>
                    <span>CS</span>
                </div>
            </div>
        </div>
        )
}

export default TeamStatsArray;