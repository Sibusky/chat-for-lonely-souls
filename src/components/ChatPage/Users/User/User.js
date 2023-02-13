import React from 'react';
import './User.css';

export default function User({ name, about, avatar }) {
  return (
    <li className='users__list-item'>
      <img
        className='users__list-item-image'
        src={
          avatar
            ? avatar
            : 'https://api.nomoreparties.co/uploads/zagruzhennoe_3_312a12853b.jpeg'
        }
        alt='avatar of user'
      />
      <div className='users__list-item-description'>
        <p className='users__list-item-name'>{name}</p>
        <p className='users__list-item-about'>{about}</p>
      </div>
    </li>
  );
}
