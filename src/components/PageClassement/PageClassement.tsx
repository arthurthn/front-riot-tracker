import React from 'react';
import backgroundImg from '../assets/images/background_stats.jpg';
import './PageClassement.css';
import UserProfile from './UserProfile/UserProfile';
import TeamStatAboveArray from './TeamStatAboveArray/TeamStatAboveArray'
import TeamStatsArray from './TeamStatsArray/TeamStatsArray'

function pageclassement() {
    return (
        <div className="containerStandings">
            <img src={backgroundImg} className="background-image background-standings"/>
            <div className="gradient lighterGradient"></div>
            <div className="containerStandings">
                <div className="contained">
                    <UserProfile />
                    <TeamStatAboveArray />
                    <TeamStatsArray />
                    <TeamStatAboveArray />
                    <TeamStatsArray />
                </div>
            </div>
        </div>
    )
}

export default pageclassement;