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
    )
}


export default SearchBar;