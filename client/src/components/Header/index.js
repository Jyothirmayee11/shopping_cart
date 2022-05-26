import React from 'react';
import './header.scss';
import Navigation from '../Navigation';
import Logo from './../../assets/logo.png';


export default function Header() {
    return(
        <div className="header">
            <div className='logo-container'>
            <img src={Logo} alt="logo" className="logo" />
            </div>
            <Navigation/>
        </div>
    )
}