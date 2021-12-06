import React, { useEffect, useState } from 'react';
import backgroundImg from '../assets/images/background_stats.jpg';
import './GameDetails.css';
import UserProfile from './UserProfile/UserProfile';
import TeamStatAboveArray from './TeamStatAboveArray/TeamStatAboveArray'
import TeamStatsArray from './TeamStatsArray/TeamStatsArray'
import {getMatchDetails } from '../../api/index'
import { useParams } from 'react-router';

function GameDetails() {
    const {gameId} = useParams()
    const [gameData, setGameData] = useState({})
    const [fetchDone, setFetchDone] = useState(false)

    const fetchData = async () =>{
        const gameData = await getMatchDetails(gameId)
        setGameData(gameData)
        setFetchDone(true)
        console.log(gameData)
    }

    useEffect( () =>{
        fetchData()
    },[])

    return (
        <div className="containerStandings">
            <img src={backgroundImg} className="background-image background-standings"/>
            <div className="gradient lighterGradient"></div>
            {fetchDone ? <Content gameData={gameData}/> : null}
        </div>
    )
}

const Content = ({gameData}) =>{
    return(
        <div className="containerStandings">
            <div className="contained">
                <UserProfile />
                <TeamStatAboveArray />
                <TeamStatsArray />
                <TeamStatAboveArray />
                <TeamStatsArray />
            </div>
        </div>
    )
}

export default GameDetails;