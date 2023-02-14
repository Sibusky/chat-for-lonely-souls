import React from 'react';
import './AboutUser.css';

export default function AboutUser({ users }) {
  return (
    <div className='user-info__about-user'>
      <div className='user-info__image-container'>
        <img
          className='user-info__image'
          src={users[0].avatar ? users[0].avatar : './default-user-photo.png'}
          alt='avatar of selected user'
        />
      </div>
      <div className='user-info__description'>
        <p className='user-info__name'>{users[0].name}</p>
        <p className='user-info__about'>{users[0].about}</p>
      </div>
    </div>
  );
}
