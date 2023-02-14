import React from 'react'
import Chat from './Chat/Chat'
import './ChatPage.css'
import UserInfo from './UserInfo/UserInfo'
import Users from './Users/Users'

export default function ChatPage({ users }) {
  return (
    <main className='chat-page'>
        <Users users={users}/>
        <Chat />
        <UserInfo users={users}/>
    </main>
  )
}
