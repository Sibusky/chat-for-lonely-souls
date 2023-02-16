import React, { useContext } from 'react';
import AboutUser from './AboutUser/AboutUser';
import './UserInfo.css';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

export default function UserInfo({ selectedUser, handlePopupOpen }) {
  // Подписываюсь на контекст пользователя
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className='user-info'>
      <div className='user-info__container'>
        <h2 className='user-info__container-title'>About Alter Ego</h2>
        {selectedUser.id ? (
          <AboutUser selectedUser={selectedUser} />
        ) : (
          <p className='user-info__container-select-user'>Select User</p>
        )}
      </div>
      {selectedUser.id === currentUser.id && (
        <div className='user-info__buttons'>
          <button className='user-info__button-edit user-info__button button' onClick={() => handlePopupOpen()}>
            Edit
          </button>
          <button className='user-info__button-logout user-info__button button'>
            Logout
          </button>
        </div>
      )}
    </section>
  );
}
