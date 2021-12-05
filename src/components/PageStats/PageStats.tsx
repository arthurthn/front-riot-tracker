import React, {useEffect, useState } from 'react';
import './PageStats.css';
import backgroundImg from '../assets/images/background_stats.jpg';
import mainPic from '../assets/images/avatarMainPic.png';
import LastGames from './LastGames/LastGames';
import SeasonRanks from './SeasonRanks/SeasonRanks';
import RecentMatches from './RecentMatches/RecentMatches';
import MostPlayedChampions from './MostPlayedChampions/MostPlayedChampions';
import { getUserData, getLast10GamesStats } from '../../api';

const PageStats = () => {
    
    const [userData, setUserData] = useState({})

    const fetchData = async () => {
        const userData = await getUserData("Canettes de 86")
        setUserData(userData)
        console.log(userData)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="background-image">
            <img src={backgroundImg} className="background-image backgroundStats"/>
            <div className="gradient lighterGradient"></div>
            <div className="user">
                <img src={mainPic} className = "mainPic"/>
                <div className="usernameText">Kimiri The Best</div>
                <div className="userLevel">Summoner level <span>399</span></div>
            </div>
            <div className="containerComponent">
                <div className="row">
                    <SeasonRanks />
                    <LastGames />
                </div>
                <div className="row">
                    <RecentMatches />
                    <MostPlayedChampions />
                </div>
            </div>
        </div>
    )
}


export default PageStats;