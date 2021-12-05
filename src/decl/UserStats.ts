export type LeagueData = {
    leagueId : string;
    queueType : string;
    tier : string;
    rank : string;
    summonerId : string;
    summonerName : string;
    leaguePoints : number;
    wins : number;
    loses : number;
    
}

export type UserData = {
    id : string;
    accountId: string;
    puuid : string;
    name : string;
    profilIconId : number;
    summonerLevel : number
}

export type ChampionStats = {
    championId : number;
    championLevel : number;
    championPoints : number;
    championNanme : string
}

export type Last10GamesStats = {
    wins : number;
    loses : number;
    averageCs : number;
    averageDmgDealt : number;
    mostPlayedLanes :  {
        name : string;
        winCount : number;
        averageCs : number;
        averageDmgDealt : number;
        count : number;
        winRatio : number
    }[];
    mostPlayedChampions : {
        name : string;
        winCount : number;
        averageCs : number;
        averageDmgDealt : number;
        count : number;
        winRatio : number;
        kills : number;
        deaths : number;
        assists : number;
    }[]

}

