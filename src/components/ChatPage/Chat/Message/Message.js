import React, { useContext } from 'react';
import './Message.css';
import { CurrentUserContext } from '../../../../context/CurrentUserContext';

export default function Message({ message }) {
  // Подписываюсь на контекст пользователя
  const { currentUser } = useContext(CurrentUserContext);

  // let time = new Date(message.id)
  const transformTime = (time) => {
    let timeStamp = new Date(time);
    return `${timeStamp.getFullYear().toString()}.${timeStamp
      .getMonth()
      .toString()}.${timeStamp.getDate().toString()} ${timeStamp
      .getHours()
      .toString()}:${timeStamp.getMinutes().toString()}`;
  };

  return (
    <li
      className={
        message.userId === currentUser.id
          ? 'chat__message-item chat__message-item-my'
          : 'chat__message-item'
      }
    >
      <img
        className='chat__message-user-avatar'
        src={
          message.userAvatar !== 'undefined'
            ? message.userAvatar
            : './default-user-photo.png'
        }
        alt='avatar of user'
      />
      <div
        className={
          message.userId === currentUser.id
            ? 'chat__message-text-container chat__message-text-container-my'
            : 'chat__message-text-container'
        }
      >
        <p
          className={
            message.userId === currentUser.id
              ? 'chat__message-sender chat__message-sender-my'
              : 'chat__message-sender'
          }
        >
          {message.userName}
        </p>
        <p
          className={
            message.userId === currentUser.id
              ? 'chat__message-item-text chat__message-item-text-my'
              : 'chat__message-item-text'
          }
        >
          {message.text}
        </p>
        <p
          className={
            message.userId === currentUser.id
              ? 'chat__message-time chat__message-time-my'
              : 'chat__message-time'
          }
        >
          {transformTime(message.id)}
        </p>
      </div>
    </li>
  );
}
