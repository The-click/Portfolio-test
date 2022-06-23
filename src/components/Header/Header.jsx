import Logo from '../../img/Logo.svg';
import './Header.css'
import React from 'react';
import NavigMenu from '../NavigMenu/NavigMenu';

const Header = props => {
    return (
        <div className='header'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <span>Agency</span>
                </div>
               <NavigMenu />
                <button className="header__button button">
                    <span>Contact</span>    
                </button>
            </div>
            
        </div>
    );
};



export default Header;