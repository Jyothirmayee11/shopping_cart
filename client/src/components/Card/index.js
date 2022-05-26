import React from 'react';
import './card.css';

const Card = (product) => {
    return(
        <div className='card'>
            {console.log("product", product.product)}
            <h4>{product.product.name}</h4>
            <img src={product.product.imageURL} alt={product.name}/>
            <div>{product.product.description}</div>
            <div className="purchase">
                <div>{product.product.price}</div>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Card;