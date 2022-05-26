import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// import Signup from '../SignUp';
// import Products from '../Products';
// import Login from '../Login';
// import Cart from '../Cart';

import cartLogo from '../../assets/cart.svg';

import './navigation.css';

export default function Navigation() {
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
                <div className='cart'>
                <img className='cart-logo' src={cartLogo} alt="cart" />
                    <div className='cart-items'> 0 items </div>
                </div>
            </div>
        </div><Outlet /></>
    )
}