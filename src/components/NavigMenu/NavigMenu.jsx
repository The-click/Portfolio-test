import React from 'react';

import "./NavigMenu.css";

const NavigMenu = () => {
    return (
    
        <nav className="header__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <button href="#" className="menu__link">About</button></li>
                        <li className="menu__item">
                            <button href="#" className="menu__link">Services</button></li>
                        <li className="menu__item">
                            <button href="#" className="menu__link">Pricing</button></li>
                        <li className="menu__item">
                            <button href="#" className="menu__link">Blog</button></li>
                    </ul>
      </nav>
    );
};

export default NavigMenu;