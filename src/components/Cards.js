import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    <div className="page-title text-center">
  <h2 className='white-sans'>Portfolio <span className="primary"></span> <span className="title-bg">Portfolio</span></h2>
  <p> All Projects Below Lead To Github Repositories.</p>
  </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/test_image.PNG'
              text='Convolutional Neural Network'
              label='Python'
              path='https://github.com/jacobmetcalfe/Network-Proposal-CS-3910'
            />
            <CardItem
              src='images/sys_ad_pic.PNG'
              text='System Administration Project'
              description='A network proposal that was made in CS 3910 at University of Colorado at Colorado Springs, It was quite a bit of work, not alot of coding involved, but demonstrates technical writing ability as well as knowledge of IT infrastructure.'
              label='Bash / Technical Writing'
              path='https://github.com/jacobmetcalfe/Network-Proposal-CS-3910'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/test_image.PNG'
              text='Compiler Design Project'
              label='Python'
              path='https://github.com/jacobmetcalfe/Network-Proposal-CS-3910'
            />
            <CardItem
              src='images/test_image.PNG'
              text='Another Project That Has a Long Name'
              label='Python'
              path='https://github.com/jacobmetcalfe/Network-Proposal-CS-3910'
            />
            <CardItem
              src='images/test_image.PNG'
              text='Another Project That Has a Long Name'
              label='Python'
              path='https://github.com/jacobmetcalfe/Network-Proposal-CS-3910'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
