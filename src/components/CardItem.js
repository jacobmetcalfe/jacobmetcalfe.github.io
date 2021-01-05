import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' target='_blank' rel="noopener noreferrer" href={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='A Portfolio'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text underline'>{props.text}</h5>
            <p className='cards__item__text'>{props.description}</p>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
