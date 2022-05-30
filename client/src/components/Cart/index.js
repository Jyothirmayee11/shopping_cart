import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addItem, removeItem } from '../../redux/actions';

import CartCard from '../CartCard';
import './cart.css';

function Cart(props) {
  // const [ productList, updateProductList ] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch('http://localhost:5000/products').then((res) => res.json()).then((products) => {
  //     const productsList = products.filter((product) => product.category === products[0].category)
  //     updateProductList(productsList);
  //   })
  //   },[updateProductList]);

  return (
    <div className="modal">
      <div className='modal-content'>
        <div className='modal-header'>
          <div className='header-content'>
            <div>My cart ({props.cartItems.length} items) </div>
            <div onClick={() => navigate('/products')}> X </div>
          </div>
        </div>
        <div className='modal-body'>
          {props.cartItems.length ? 
            props.cartItems.map((product, index) => <CartCard product={product} key={index}/>):
            <div className='modal-footer'>
            <h5> No items in your cart </h5>
            <div> Your favourite items are just a click away</div>
            </div>

          }
        </div>
        <div className='modal-footer'>
          <div className='tagline'> Promo code can be applied anywhere </div>
          <div className='button'> 
            <div> Proceed to checkout </div>
            <div> Rs {props.totalCartPrice} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    totalCartPrice: state.totalCartPrice
  }
}

const mapDispatchToProps = (state, dispatch) => {
  return{
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);