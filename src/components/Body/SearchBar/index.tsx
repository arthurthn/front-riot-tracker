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
            
          
    )
}


var pseudo = document.getElementById("Pseudo");

export default SearchBar;