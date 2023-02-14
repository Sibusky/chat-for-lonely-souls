import React from 'react';
import './Message.css';

export default function Message({ users, message }) {
  return (
    <li className='chat__message-item'>
      <img
        className='chat__message-user-avatar'
        src={users[0].avatar}
        alt='avatar of user'
      />
      <div className='chat__message-text-container'>
        <p className='chat__message-sender'>{users[0].name}</p>
        <p className='chat__message-time'>time</p>
        <p className='chat__message-item-text'>{message}</p>
      </div>
    </li>
  );
}
