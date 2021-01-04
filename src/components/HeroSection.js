import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/banner_video.mp4' autoPlay loop muted />
      <h1>Jacob Metcalfe</h1>
      <p>Feel Free To Contact Me Below</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Contact
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
