import React from 'react';
import User from '../User/User';
import './UsersList.css';

export default function UsersList({ users, handleUserClick }) {
  return (
    <ul className='users__list'>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          about={user.about}
          avatar={user.avatar}
          handleUserClick={handleUserClick}
        />
      ))}
    </ul>
  );
}
