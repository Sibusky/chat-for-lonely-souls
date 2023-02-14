import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ChatPage from '../ChatPage/ChatPage';

function App() {
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
      name: 'User without Avatar',
      about: 'Male alter ego',
    },
    {
      name: 'User without Avatar',
      about: 'Male alter ego',
    },
  ];

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='chat' element={<ChatPage users={users} />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
