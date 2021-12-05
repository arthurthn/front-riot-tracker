import React from 'react';
import './RankedStats.css';
import LeeSin from '../../../assets/images/LeeSin.png'
import image59 from '../../../assets/images/image59.png'
import image60 from '../../../assets/images/image60.png'
import image61 from '../../../assets/images/image61.png'
import image62 from '../../../assets/images/image62.png'
import ItemsInGame from './ItemsInGame/ItemsInGame'


function RankedStats() {
    return (
        <div className="rankedContainer">
            <div className="differentCriteriasStat">
                    <img src={LeeSin} className="imgChampion"/>
                    <div className="imgPouvoir">
                        <div className="columnImgPower">
                            <img src={image59}/>
                            <img src={image60}/>
                            <img src={image61}/>
                            <img src={image62}/>
                        </div>
                    </div>
                    <div className="differentCriteriasWithTitle">
                        <div className="criteria">
                            <span className="criteriaBold">Voster</span>
                            <span className='criteriaNameSmall'>Silver 2</span>
                        </div>
                        <div className="criteria">
                            <span className="criteriaBold">2.83:1</span>
                            <span>14/16/3(50%)</span>
                        </div>
                        <div className="criteria">
                            <span className="criteriaBold" >10,892</span>
                        </div>
                        <div className="criteria">
                            <span className="criteriaBold">136</span>
                            <span>5.8 par minute</span>
                        </div>
                    </div>
                </div>
                <div className="itemsContainer">
                    <ItemsInGame />
                </div>
        </div>
    )
}


export default RankedStats;