import React, { useContext } from 'react';
import './User.css';
import { CurrentUserContext } from '../../../../context/CurrentUserContext';

export default function User({ id, name, about, avatar, handleUserClick }) {
  // Подписываюсь на контекст пользователя
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <li
      className='users__list-item'
      onClick={() => handleUserClick(id, name, about, avatar)}
    >
      <img
        className='users__list-item-image'
        src={avatar !== 'undefined' ? avatar : './default-user-photo.png'}
        alt='avatar of user'
      />
      <div className='users__list-item-description'>
        <p className='users__list-item-name'>
          {currentUser.id === id ? `${name} (you)` : name}
        </p>
        <p className='users__list-item-about'>{about}</p>
      </div>
    </li>
  );
}
