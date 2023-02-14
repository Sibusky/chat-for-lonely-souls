import React from 'react';
import User from '../User/User';
import './UsersList.css';

export default function UsersList({ users }) {


  return (
    <ul className='users__list'>
      {users.map((user, index) => (
        <User
          key={index} // не лучший вариант привязывать индекс к ключу, но тут нет базы данных, а значит нет id
          name={user.name}
          about={user.about}
          avatar={user.avatar}
        />
      ))}
    </ul>
  );
}
