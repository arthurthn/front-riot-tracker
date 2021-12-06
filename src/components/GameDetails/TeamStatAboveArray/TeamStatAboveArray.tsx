import React from 'react';
import './TeamStatAboveArray.css'
import moneyBag from '../../assets/images/moneyBag.svg'
import spiderHead from '../../assets/images/spiderHead.svg'
import dragonSymbol from '../../assets/images/dragonSymbol.svg'
import castle4 from '../../assets/images/castle4.svg'

function TeamStatAboveArray() {
    return (
        <div className="teamStats">
            <div className="aboveTheBox">
                <div className="leftSide">
                    Equipe Bleue
                </div> 
                <div className="rightSide">
                    <span className="circleDark">
                        <img src={moneyBag} className="imgRightSide"/>
                    </span>
                    <span className="rightSideText">9 628</span>
                    <span className="circleDark">
                        <img src={spiderHead} className="imgRightSide"/>
                    </span>
                    <span className="rightSideText">1</span>
                    <span className="circleDark">
                        <img src={dragonSymbol} className="imgRightSide"/>
                    </span>
                    <span className="rightSideText">2</span>
                    <span className="circleDark">
                        <img src={castle4} className="imgRightSide"/>
                    </span>
                    <span className="rightSideText">10</span>
                </div>
            </div>
        </div>
    )
}


export default TeamStatAboveArray;