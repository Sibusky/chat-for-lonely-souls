import React from 'react';
import './Users.css';
import UsersList from './UsersList/UsersList';

export default function Users({ users }) {
  return (
    <section className='users'>
      <div className='users__container'>
        <h2 className='users__container-title'>My Alter Egos</h2>
        <form className='users__search-form'>
          <input
            className='users__search-input'
            id='users__search-input'
            type='text'
            placeholder='Search Alter Egos'
            name='users__search-input'
          />
        </form>
        <UsersList users={users}/>
      </div>
    </section>
  );
}
