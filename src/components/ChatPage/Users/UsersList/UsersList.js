import React from 'react';
import User from '../User/User';
import './UsersList.css';

export default function UsersList() {
  const users = [
    {
      name: 'Aleksei Smirnov',
      about: 'JS Developer',
      avatar:
        'https://bitfilms.smirnov.nomoredomains.icu/static/media/student-photo.cad54e2754cc673747f1.jpg',
    },
    {
      name: 'Alex',
      about: 'Student',
      avatar:
        'https://sun9-23.userapi.com/impg/EQHWxW_0YhmYb-2j87fzwb-OU-k9HV5MMAxaOA/SKd829vutHw.jpg?size=1280x1280&quality=96&sign=b35e3a8ed01f21c801a010b657d9a56d&type=album',
    },
    {
      name: 'Smirnoff The Electrician',
      about: 'Electrician',
      avatar:
        'https://sun9-7.userapi.com/impg/c855424/v855424919/250d68/yLixoVlbHhU.jpg?size=1045x1045&quality=96&sign=8b3e6021281d710907eb9f716e00418c&type=album',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
  ];

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
