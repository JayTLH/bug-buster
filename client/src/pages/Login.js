import React from 'react';
import './Login.scss';

export default function Login() {
  return (
    <div className='login'>
      <div className='login__background'></div>
      <div className='login__left'>
        <img className='login__logo' src='' alt='bb logo'/>
        <div className='login__intro'>
          <p className='login__text'></p>
        </div>
      </div>
      <div className='login__right'>
        <form className='login__form'>
          <input className='login__username' />
          <input className='login__password' />
          <button className='login__login'></button>
        </form>
        <button className='login__create'></button>
      </div>
    </div>
  );
}
