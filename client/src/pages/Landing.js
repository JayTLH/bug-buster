import React from 'react';
import './Landing.scss';
import logo from '../assets/logo.png';

export default function Login() {
  return (
    <div className='landing'>
      <div className='landing__background'></div>
      <div className='landing__body'>
        <header className='landing__header'>
          <img className='landing__logo' src={logo} alt='bb logo' />
          <h1 className='landing__name'>BB</h1>
        </header>
        <main className='landing__main'>
          <div className='landing__left'>
            <div className='landing__intro'>
              <p className='landing__text'>asdf</p>
            </div>
          </div>
          <div className='landing__right'>
            <form className='landing__form'>
              <h2 className='landing__form-header'>Sign In</h2>
              <input className='landing__username' />
              <input className='landing__password' />
              <button className='landing__login'>Login</button>
            </form>
            <button className='landing__create'></button>
          </div>
        </main>
      </div>
    </div>
  );
}
