import React from 'react';
import './Hero.scss';
import Button from '@material-ui/core/Button';

export default function Login() {
  return (
    <div className='hero'>
      <h1 className='hero__moto'>One stop shop to your bug busting solutions</h1>
      <h2 className='hero__text'>with BB's high quality features</h2>
      <Button className='hero__action' variant='contained' color='primary'>Register</Button>
    </div>
  );
}
