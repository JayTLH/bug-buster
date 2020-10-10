import React from 'react';
import './Navbar.scss';
import logo from '../assets/logo.png';

export default function Login() {
  return (
    <nav className='navbar'>
      <img className='navbar__logo' src={logo} alt='bb logo' />
      <h1 className='navbar__name'>BB</h1>
    </nav>
  );
}
