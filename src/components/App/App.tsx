import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Homepage from '../homepage'
import Header from '../Header'
import Pagestats from '../pagestats'
import Pageclassement from '../pageclassement'
import Pageconseils from '../pageconseils'
import Pageabout from '../pageabout'

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
        <Route path = "/Classement" element= {<Pageclassement/>}/>
        <Route path = "/Statistiques" element= {<Pagestats/>}/>
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
