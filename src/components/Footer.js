import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
             <p> Jacob Metcalfe <i className='fas fa-laptop-code' /></p>
            </Link>
          </div>
          <small className='website-rights'>Made With React | All Photos Taken Myself</small>
          <div className='social-icons white-sans'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacob-metcalfe-9164b7134/"><i className='fab fa-linkedin' /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/jacobmetcalfe"><i className='fab fa-github' /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jacob.metcalfe/"><i className='fab fa-instagram' /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jacobmetcalfe"><i className='fab fa-twitter' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
