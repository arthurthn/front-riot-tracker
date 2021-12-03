<<<<<<< HEAD
import React from "react";
import './style.css';

function SearchBar(){
    return(
        
           
            <div>
                <h1>Test Get data</h1>

                <form>
                <input
                type="text"
                placeholder="Add text"
                />
                <button type="submit">Submit</button>
                    
            
            </form>
            </div>
            
          
=======
import React from 'react';
import './style.css';
import WhiteEye from '../../assets/images/eye-white.png';


// Stocker les infos
function SearchBar() {
    return (
        <div className="interface">
            <input type="name" placeholder="Psedonyme#EUW ..."
            className="searchUsername"/>
            <button className="buttonEntrer">
                <div className="whiteEye">
                    <img src={WhiteEye} 
                        alt="WhiteEye"
                        className = "searchImg"/> 
                </div>
                <span>Entrer</span>
            </button>
            <div className="lineSeperation"></div>
        </div>
>>>>>>> b421588043ccb436f457ffc324b74f480ed0e7ed
    )
}


<<<<<<< HEAD
var pseudo = document.getElementById("Pseudo");

=======
>>>>>>> b421588043ccb436f457ffc324b74f480ed0e7ed
export default SearchBar;