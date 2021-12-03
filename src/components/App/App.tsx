import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Homepage from '../homepage'
import Header from '../Header'

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
