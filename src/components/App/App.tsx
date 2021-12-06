import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import Header from '../Header/Header'
import PageStats from '../PageStats/PageStats'
import GameDetails from '../GameDetails/GameDetails'
import RegisterPage from '../RegisterPage/RegisterPage'
import LogInPage from '../LogInPage/LogInPage'

class App extends Component {
render(){ 
    return (
    <div className= "App">
    <Router>
    <Header/>
      <Routes>
        <Route path = "/" element= {<Homepage/>}/>
        <Route path = "/game-details/:gameId" element= {<GameDetails/>}/>
        <Route path = "/statistiques/:summonerName" element= {<PageStats/>}/>
        <Route path = "/register" element= {<RegisterPage/>}/>
        <Route path = "/login" element= {<LogInPage/>}/>
      </Routes>
    </Router>
    </div>
  );
  }
}

export default App;
