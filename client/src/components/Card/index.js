import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem } from '../../redux/actions';
import './card.css';

const Card = (props) => {
    const { name, imageURL, description, price } = props.product;
    return(
        <div className='card'>
            <h4>{name}</h4>
            <img src={imageURL} alt={name}/>
            <div className='description'>{description.slice(0,150) + '...'}</div>
            <div className="purchase">
                <div>MRP Rs.{price}</div>
                <button onClick={() => props.addItem(props.product)}>Buy Now</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
  
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      addItem: (item) => dispatch(addItem(item)),
      removeItem: (item) => dispatch(removeItem(item))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Card);
