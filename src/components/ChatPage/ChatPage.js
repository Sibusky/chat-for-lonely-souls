import React, { useState } from 'react';
import Chat from './Chat/Chat';
import './ChatPage.css';
import UserInfo from './UserInfo/UserInfo';
import Users from './Users/Users';

export default function ChatPage({
  users,
  messages,
  handleMessageInput,
  inputValue,
  handleMessageSubmit,
  keyListener,
  handlePopupOpen,
  windowSize,
}) {
  const [selectedUser, setSelectedUser] = useState({
    name: '',
    about: '',
    avatar: '',
  });

  const handleUserClick = (id, name, about, avatar) => {
    setSelectedUser({
      id: id,
      name: name,
      about: about,
      avatar: avatar,
    });
  };

  return (
    <main className='chat-page'>
      {windowSize > 500 ? (
        <div className='chat-page__container'>
          <Users users={users} handleUserClick={handleUserClick} />
          <Chat
            users={users}
            messages={messages}
            handleMessageInput={handleMessageInput}
            inputValue={inputValue}
            handleMessageSubmit={handleMessageSubmit}
            keyListener={keyListener}
          />
          <UserInfo
            selectedUser={selectedUser}
            handlePopupOpen={handlePopupOpen}
          />
        </div>
      ) : (
        <div className='chat-page__container'>
          <Users users={users} handleUserClick={handleUserClick} />
          <UserInfo
            selectedUser={selectedUser}
            handlePopupOpen={handlePopupOpen}
          />
          <Chat
            users={users}
            messages={messages}
            handleMessageInput={handleMessageInput}
            inputValue={inputValue}
            handleMessageSubmit={handleMessageSubmit}
            keyListener={keyListener}
          />
        </div>
      )}
    </main>
  );
}
