import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src="/images/heroSection.jpg"></img>
      <h1>PRZYGODA CZEKA!</h1>
      <p>WIĘC, IDZIESZ Z NAMI?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ZACZNIJMY
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
