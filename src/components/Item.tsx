import React from 'react';
import './Items.css'

function Item({item, size}) {
    return(
        <div className="item-container" style={{width : `${size}px`,height : `${size}px` }}>
            <img className="item-img" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/${item.itemId}.png`}/>
            <div className="item-hover">
                <div className="item-name">{item.name}</div>
                <div className="item-description" dangerouslySetInnerHTML={{ __html: item.description}}></div>
                <div className="item-plaintext">{item.plainText}</div>
                <div className="item-price">Coût : <span> {item.totalPrice} ({item.basePrice})</span></div>
            </div>
        </div>
    )
}

export default Item;