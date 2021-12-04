import React from 'react';
import './WinBarRatio.css'

function WinBarRatio() {
    return (
        <div className="barRatioContainer">
            <div className="Bar">
                <span className= "barLosses">D</span>
                <div className="Bar winBar">
                    <span>V</span>
                </div>
            </div>
        </div>
    )
}


export default WinBarRatio;