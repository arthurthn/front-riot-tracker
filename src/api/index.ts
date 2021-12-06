import { UserDatas, LeagueData, ChampionStats, Last10GamesStats } from "../decl";
import axios from "axios";


export const getUserData= async (summonerName : string) =>{
    try{
        const res =  await axios.get(`http://localhost:8080/user-data/${summonerName}`)
        return res.data
    }catch(error){
        console.error("error", error)
    } 
}

export const getLast10GamesStats= async (summonerName: string) =>{
    try{
        const res = await axios.get(`http://localhost:8080/last-games-stats/${summonerName}`)
        return res.data
    }catch(error){
        console.error("error", error)
    }
}

export const getGameHistory= async (summonerName: string) =>{
    try{
        const res = await axios.get(`http://localhost:8080/game-history/${summonerName}`)
        return res.data
    }catch(error){
        console.error("error", error)
    }
}

export const checkUserExist = async (summonerName: string) =>{
    try{
        const res = await axios.get(`http://localhost:8080/user-exist/${summonerName}`)
        return res.data
    }catch(error){
        console.error("error", error)
    }
}

export const getMatchDetails = async (gameId: string) =>{
    try{
        const res = await axios.get(`http://localhost:8080/game-details/${gameId}`)
        return res.data
    }catch(error){
        console.error("error", error)
    }
}