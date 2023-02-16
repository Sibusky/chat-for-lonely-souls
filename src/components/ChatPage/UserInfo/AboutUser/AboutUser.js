import React from 'react';
import './AboutUser.css';

export default function AboutUser({ selectedUser }) {
  return (
    <div className='user-info__about-user'>
      <div className='user-info__image-container'>
        <img
          className='user-info__image'
          src={selectedUser.avatar !== 'undefined' ? selectedUser.avatar : './default-user-photo.png'}
          alt='avatar of selected user'
        />
      </div>
      <div className='user-info__description'>
        <p className='user-info__name'>{selectedUser.name}</p>
        <p className='user-info__about'>{selectedUser.about}</p>
      </div>
    </div>
  );
}
