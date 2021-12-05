import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import Header from '../Header/Header'
import PageStats from '../PageStats/PageStats'
import PageClassement from '../PageClassement/PageClassement'
import PageConseils from '../PageConseils/PageConseils'
import PageAbout from '../PageAbout/PageAbout'
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
        <Route path = "/classement" element= {<PageClassement/>}/>
        <Route path = "/statistiques" element= {<PageStats/>}/>
        <Route path = "/conseils" element= {<PageConseils/>}/>
        <Route path = "/about" element= {<PageAbout/>}/>
        <Route path = "/register" element= {<RegisterPage/>}/>
        <Route path = "/login" element= {<LogInPage/>}/>
      </Routes>
    </Router>
    </div>
  );
  }
}

export default App;
