import React from 'react';
import './ItemsInGame.css';
import img1 from '../../../../assets/images/pouvoir1.png'
import img2 from '../../../../assets/images/pouvoir2.png'

function ItemsInGame() {
    return (
       <div className="imagesItems">
            <img src={img1}/>
            <img src={img2}/>
       </div> 
    )
}


export default ItemsInGame;