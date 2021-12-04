import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import Header from '../Header/Header'
import Pagestats from '../PageStats/PageStats'
import Pageclassement from '../PageClassement/PageClassement'
import Pageconseils from '../PageConseils/PageConseils'
import Pageabout from '../PageAbout/PageAbout'

// function App() {
  // return (
  //   <div className="App">
  //     <Header />
  //     <Body/>
  //   </div>
class App extends Component {
render(){ 
    return (
    <div className= "App">
    <Header/>
    <Router>
      <Routes>
        <Route path = "/" element= {<Homepage/>}/>
        <Route path = "/classement" element= {<Pagestats/>}/>
        <Route path = "/Statistiques" element= {<Pageclassement/>}/>
        <Route path = "/Conseils" element= {<Pageconseils/>}/>
        <Route path = "/About" element= {<Pageabout/>}/>
        {/* <link to="body">
          <span>flkerjklgjklerjlgjklerjg</span>
        </link> */}
      </Routes>
    </Router>
    </div>
  );
  }
}

export default App;
