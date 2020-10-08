import React from 'react';
import './Login.scss';
import logo from '../assets/logo.png';

export default function Login() {
  return (
    <div className='login'>
      <div className='login__background'></div>
      <div className='login__body'>
        <header className='login__header'>
          <img className='login__logo' src={logo} alt='bb logo' />
          <h1 className='login__name'>BB</h1>
        </header>
        <main className='login__main'>
          <div className='login__left'>
            <div className='login__intro'>
              <p className='login__text'>asdf</p>
            </div>
          </div>
          <div className='login__right'>
            <form className='login__form'>
              <h2 className='login__form-header'>Sign In</h2>
              <input className='login__username' />
              <input className='login__password' />
              <button className='login__login'>Login</button>
            </form>
            <button className='login__create'></button>
          </div>
        </main>
      </div>
    </div>
  );
}
