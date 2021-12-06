<<<<<<< HEAD
import React, {  useEffect, useState } from 'react';
=======
import React, {useEffect, useState } from 'react';
import { useParams, useHref } from 'react-router';
import { useNavigate } from 'react-router';
>>>>>>> develop
import './PageStats.css';
import backgroundImg from '../assets/images/background_stats.jpg';
import mainPic from '../assets/images/avatarMainPic.png';
import LastGames from './LastGames/LastGames';
import SeasonRanks from './SeasonRanks/SeasonRanks';
import RecentMatches from './RecentMatches/RecentMatches';
import MostPlayedChampions from './MostPlayedChampions/MostPlayedChampions';
import { getUserData, getLast10GamesStats, getGameHistory} from '../../api';
import { Last10GamesStats, UserDatas } from '../../decl';

const PageStats = () => {
    const {summonerName} = useParams()
    const navigate = useNavigate()
    
    const [userDatas, setUserDatas] = useState()
    const [lastGamesStats, setLastGamesStats] = useState()
    const [matchHistory, setMatchHistory] = useState({})
    const [fetchDone, setFetchDone] = useState(false)
     

    const fetchData = async () => {
        const userData = await getUserData(summonerName)
        if(!userData.userData.success) navigate(`/`)
        const lastGamesStats = await getLast10GamesStats(summonerName)
        const matchHistory = await getGameHistory(summonerName)
        setUserDatas(userData)
        setLastGamesStats(lastGamesStats)
        setMatchHistory(matchHistory)
        setFetchDone(true)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="stats-container">
            <img className="bg-img" src={backgroundImg} alt="" />
            <div className="gradient"></div>
            {fetchDone ? <Content 
                            userDatas={userDatas}
                            lastGamesStats={lastGamesStats}
                            matchHistory={matchHistory}
                            /> : null}
        </div>
    )
}

export type ContentProps = {
    userDatas: UserDatas | undefined;
    lastGamesStats: Last10GamesStats | undefined

}

const Content = ({userDatas, lastGamesStats, matchHistory}) => {
    return (
        <div className="content">
                <UserPanel userDatas={userDatas}/>
                <div className="row">
                    <SeasonRanks userDatas={userDatas}/>
                    <LastGames lastGamesStats={lastGamesStats}/>
                </div>
                <div className="row">
                    <RecentMatches matchHistory={matchHistory}/>
                    <MostPlayedChampions userDatas={userDatas}/>
                </div>
        </div>
    )
}

const UserPanel = ({userDatas}) =>{
    console.log(userDatas)
    return(
        <div className="user-panel">
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${userDatas.userData.profileIconId}.png`} alt="" className="user-profil-img" />
            <div className="user-infos">
                <span className="user-summoner-name">{userDatas.userData.name}</span>
                <span className="user-summoner-level">Summoner level <span className="level">{userDatas.userData.summonerLevel}</span></span>
            </div>
        </div>
    )
}

export default PageStats;