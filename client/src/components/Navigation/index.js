import React from 'react';
import { connect } from 'react-redux';

import { Link, Outlet } from 'react-router-dom';

import cartLogo from '../../assets/cart.svg';

import './navigation.css';

function Navigation(props) {
    return(
        <><div className='navigation'>
            <div className='home-products'>
                <Link to="/home"> Home </Link>
                <Link to="/products"> Products </Link>
            </div>
            <div className="signup-login-cart">
                <div className='signup-login'>
                    <Link to="/signin"> SignIn </Link>
                    <Link to="/register"> Register </Link>
                </div>

                <Link to="/cart">
                <div className='cart'>
                    <img className='cart-logo' src={cartLogo} alt="cart" />
                    <div className='cart-items'> {props.cartItems.length} items </div>
                    </div>
                    </Link>

            </div>
        </div><Outlet /></>
    )
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cartItems,
    }
  }
  
  const mapDispatchToProps = (state, dispatch) => {
    return{
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Navigation);