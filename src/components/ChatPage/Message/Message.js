import React from 'react';
import './Message.css';

export default function Message({ users, message, time }) {
  return (
    <li
      className={
        time === '12345'
          ? 'chat__message-item chat__message-item-my'
          : 'chat__message-item'
      }
    >
      <img
        className='chat__message-user-avatar'
        src={users[0].avatar}
        alt='avatar of user'
      />
      <div
        className={
          time === '12345'
            ? 'chat__message-text-container chat__message-text-container-my'
            : 'chat__message-text-container'
        }
      >
        <p
          className={
            time === '12345'
              ? 'chat__message-sender chat__message-sender-my'
              : 'chat__message-sender'
          }
        >
          {users[0].name}
        </p>
        <p
          className={
            time === '12345'
              ? 'chat__message-item-text chat__message-item-text-my'
              : 'chat__message-item-text'
          }
        >
          {message}
        </p>
        <p
          className={
            time === '12345'
              ? 'chat__message-time chat__message-time-my'
              : 'chat__message-time'
          }
        >
          {time}
        </p>
      </div>
    </li>
  );
}
