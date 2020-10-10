import React from 'react';
import './Landing.scss';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Login() {
  return (
    <div className='landing'>
      <div className='landing__background'></div>
      <div className='landing__layout'>
        <Navbar />
        <Hero />
        <main className='landing__main'>

        </main>
      </div>
    </div>
  );
}
