import React from 'react';
import './Popup.css';
import UserEditForm from './UserEditForm/UserEditForm';

export default function Popup({ popupIsOpen, onClose, handleSubmit }) {
  return (
    <div
      className={popupIsOpen ? 'popup popup_opened' : 'popup'}
      onClick={onClose}
    >
      <div className='popup__container' onClick={(e) => e.stopPropagation()}>
        <div className='popup__close-btn button' onClick={onClose}></div>
        <UserEditForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
