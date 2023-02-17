import React from 'react';
import Message from './Message/Message';
import './Chat.css';

export default function Chat({
  messages,
  handleMessageInput,
  inputValue,
  handleMessageSubmit,
  keyListener,
}) {
  return (
    <section className='chat'>
      <div className='chat__container'>
        <h1 className='chat__title'>Lonely Soul Chat</h1>
        <div className='chat__messages-container'>
          <ul className='chat__message-list'>
            {!messages ? (
              <p className='chat__messages-null-text'>
                Write something in the field below to start conversation
              </p>
            ) : (
              messages.map((message) => (
                <Message key={message.id} message={message} />
              ))
            )}
          </ul>
        </div>
        <form className='chat__form' onSubmit={(e) => handleMessageSubmit(e)}>
          <textarea
            className='chat__input'
            placeholder='Write something'
            type='textarea'
            rows={3}
            onChange={(e) => handleMessageInput(e)}
            value={inputValue}
            wrap='soft'
            cols='10'
            onKeyUp={(e) => keyListener(e)}
          />
          {/* <input
            className='chat__input'
            placeholder='Write something'
            type='textarea'
            rows={3}
            onChange={(e) => handleMessageInput(e)}
            value={inputValue}
          /> */}
          <button
            className='chat__button button'
            type='submit'
            // onClick={(e) => handleMessageSubmit(e)}
          ></button>
        </form>
      </div>
    </section>
  );
}
