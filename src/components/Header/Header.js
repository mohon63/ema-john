import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import CustomLink from './../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='custom-link'>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/orders">Orders</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/login">LogIn</CustomLink>
            </div>
        </nav>
    );
};

export default Header;