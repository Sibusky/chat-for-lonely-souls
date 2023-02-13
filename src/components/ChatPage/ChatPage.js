import React from 'react'
import Chat from './Chat/Chat'
import './ChatPage.css'
import UserInfo from './UserInfo/UserInfo'
import Users from './Users/Users'

export default function ChatPage() {
  return (
    <main className='chat-page'>
        <Users />
        <Chat />
        <UserInfo />
    </main>
  )
}
