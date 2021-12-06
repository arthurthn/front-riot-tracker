import React from 'react';
import './WinBarRatio.css'

function WinBarRatio({winRatio}) {
    return (
        <div className="barRatioContainer">
            <div className="winPercentage" style={{width : `${winRatio}%`}}>
            
            </div>
        </div>
    )
}


export default WinBarRatio;