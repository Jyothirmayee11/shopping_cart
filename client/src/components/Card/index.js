import React from 'react';
import './card.css';

const Card = (product) => {
    const { name, imageURL, description, price } = product.product;
    return(
        <div className='card'>
            <h4>{name}</h4>
            <img src={imageURL} alt={name}/>
            <div className='description'>{description.slice(0,150) + '...'}</div>
            <div className="purchase">
                <div>MRP Rs.{price}</div>
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default Card;