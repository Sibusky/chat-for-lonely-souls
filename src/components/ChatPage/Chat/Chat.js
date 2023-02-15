import React from 'react';
import Message from '../Message/Message';
import './Chat.css';

export default function Chat({ users, messages }) {
  return (
    <section className='chat'>
      <div className='chat__container'>
        <h1 className='chat__title'>Lonely Soul Chat</h1>
        <div className='chat__messages-container'>
          <ul className='chat__message-list'>
            {messages.map((message, index) => (
              <Message key={message.time} users={users} message={message.text} time={message.time} />
            ))}
            <Message users={users} message={messages[0].text} time={messages[0].time}/>
          </ul>
        </div>
        <form className='chat__form'>
          <textarea
            className='chat__input'
            placeholder='Write something'
            type='textarea'
            contenteditable='true'
            rows={3}
          />
          <button className='chat__button button' type='submit'></button>
        </form>
      </div>
    </section>
  );
}
