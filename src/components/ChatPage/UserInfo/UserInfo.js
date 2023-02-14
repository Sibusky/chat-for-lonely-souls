import React from 'react';
import AboutUser from './AboutUser/AboutUser';
import './UserInfo.css';

export default function UserInfo({ users }) {
  return (
    <section className='user-info'>
      <div className='user-info__container'>
        <h2 className='user-info__container-title'>About Alter Ego</h2>
        <AboutUser users={users} />
      </div>
      <div className='user-info__buttons'>
        <button className='user-info__button-edit user-info__button button'>
          Edit
        </button>
        <button className='user-info__button-logout user-info__button button'>
          Logout
        </button>
      </div>
    </section>
  );
}
