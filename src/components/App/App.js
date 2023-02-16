import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ChatPage from '../ChatPage/ChatPage';
import RequireAuth from '../../utils/RequireAuth';
import Popup from '../UI/Popup/Popup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  let location = useLocation();

  // Получаю список пользователей, которые уже в чате
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    setUsers(users);
    // console.log(users, 'users in useEffect');
  }, [setUsers]);

  // Функция проверки логина
  const handleCheckLogin = useCallback(() => {
    if (sessionStorage.getItem('id')) {
      setCurrentUser({
        id: sessionStorage.getItem('id'),
        name: sessionStorage.getItem('name'),
        about: sessionStorage.getItem('about'),
        avatar: sessionStorage.getItem('avatar'),
      });
      setIsLoggedIn(true);
    } else {
      handleLogOut();
    }
  }, []);

  // Проверяю выполнял ли пользователь вход ранее
  useEffect(() => {
    handleCheckLogin();
  }, [handleCheckLogin]);

  // Функция входа
  const handleLogin = ({ name, about, avatar }) => {
    // Записываю данные в sessionStorage
    sessionStorage.setItem('id', Date.now());
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('about', about);
    sessionStorage.setItem('avatar', avatar);
    handleCheckLogin();

    // Если массив с пользователями есть в localStorage, то добавяю данные туда
    if (localStorage.getItem('users')) {
      localStorage.setItem('users', [
        JSON.stringify([
          {
            id: sessionStorage.getItem('id'),
            name: sessionStorage.getItem('name'),
            about: sessionStorage.getItem('about'),
            avatar: sessionStorage.getItem('avatar'),
          },
          ...JSON.parse(localStorage.getItem('users')),
        ]),
      ]);
    } else {
      // Если нет массива с пользователями, то создаю
      localStorage.setItem(
        'users',
        JSON.stringify([
          {
            id: sessionStorage.getItem('id'),
            name: sessionStorage.getItem('name'),
            about: sessionStorage.getItem('about'),
            avatar: sessionStorage.getItem('avatar'),
          },
        ])
      );
    }
    // setUsers(JSON.parse(localStorage.getItem('users')));
    setUsers(JSON.parse(localStorage.getItem('users')));
  };

  // Функция выхода
  const handleLogOut = () => {
    sessionStorage.clear();
    localStorage.removeItem(`user ${sessionStorage.getItem('id')}`);
    setIsLoggedIn(false);
    setCurrentUser({
      id: '',
      name: '',
      about: '',
      avatar: '',
    });
  };

  // Обработчик ввода текста в инпут сообщений
  const handleMessageInput = (event) => {
    let inputValue = event.target.value;
    setInputValue(inputValue);
  };

  // Обработчик сабмита формы отправки сообщений
  const handleMessageSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      setInputValue('');
      return;
    }

    if (localStorage.getItem('messages')) {
      localStorage.setItem('messages', [
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('messages')),
          {
            id: Date.now(),
            text: inputValue,
            userId: currentUser.id,
            userName: currentUser.name,
            userAvatar: currentUser.avatar,
          },
        ]),
      ]);
      setMessages(JSON.parse(localStorage.getItem('messages')));
    } else {
      localStorage.setItem(
        'messages',
        JSON.stringify([
          {
            id: Date.now(),
            text: inputValue,
            userId: currentUser.id,
            userName: currentUser.name,
            userAvatar: currentUser.avatar,
          },
        ])
      );
      setMessages(JSON.parse(localStorage.getItem('messages')));
    }
    setInputValue('');
  };

  // Получаю список сообщений, которые уже в чате
  useEffect(() => {
    setMessages(JSON.parse(localStorage.getItem('messages')));
  }, [setMessages]);

  useMemo(() => {
    setMessages(messages);
  }, [messages]);

  // Слушатель на сочетание клавиш шифт и ентер
  const keyListener = (event) => {
    if (event.shiftKey && event.keyCode === 13) {
      handleMessageSubmit(event);
    }
  };

  //Открываю попап
  const handlePopupOpen = () => {
    setPopupIsOpen(true);
  };

  const handleClosePopup = () => {
    setPopupIsOpen(false);
  };

  // Функция закрытия попапа по esc
  useEffect(() => {
    const closeByEsc = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        handleClosePopup();
      }
    };
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, []);

  const handleEditProfileSubmit = (name, about, avatar) => {
    console.log(name, about, avatar, 'name, about, avatar')
    setCurrentUser({
      id: currentUser.id,
      name: name,
      about: about,
      avatar: avatar,
    });

    console.log(currentUser, 'currentUser')

    let users = JSON.parse(localStorage.getItem('users'));

    let newUsers = users.map((item) => {
      if (item.id === currentUser.id) {
        // item = { id: item.id, name: name, about: about, avatar: avatar };
        // console.log(item, 'item')
        return currentUser;

        // let { name, about, avatar } = item;
      }
      return item;
    });

    console.log(newUsers, 'newUsers');

    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
    sessionStorage.setItem('id', currentUser.id);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('about', about);
    sessionStorage.setItem('avatar', avatar);

    console.log(JSON.parse(localStorage.getItem('users')), 'localStorage')
    console.log(sessionStorage, 'sessionStorage')


    handleClosePopup();
    // location.href=location.href;
    handleCheckLogin();
  };
  // console.log(currentUser);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route element={<Layout />}>
              <Route index element={<Main isLoggedIn={isLoggedIn} />} />
              <Route
                path='login'
                element={
                  <Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
                }
              />
            </Route>
            <Route
              path='chat'
              element={
                <RequireAuth isLoggedIn={isLoggedIn}>
                  <ChatPage
                    users={users}
                    messages={messages}
                    isLoggedIn={isLoggedIn}
                    handleCheckLogin={handleCheckLogin}
                    handleMessageInput={handleMessageInput}
                    inputValue={inputValue}
                    handleMessageSubmit={handleMessageSubmit}
                    keyListener={keyListener}
                    handlePopupOpen={handlePopupOpen}
                  />
                </RequireAuth>
              }
            />

            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
        <Popup
          popupIsOpen={popupIsOpen}
          onClose={handleClosePopup}
          handleSubmit={handleEditProfileSubmit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

// const users = [
//   {
//     name: 'Aleksei Smirnov',
//     about: 'JS Developer',
//     avatar:
//       'https://bitfilms.smirnov.nomoredomains.icu/static/media/student-photo.cad54e2754cc673747f1.jpg',
//   },
//   {
//     name: 'Alex',
//     about: 'Student',
//     avatar:
//       'https://sun9-23.userapi.com/impg/EQHWxW_0YhmYb-2j87fzwb-OU-k9HV5MMAxaOA/SKd829vutHw.jpg?size=1280x1280&quality=96&sign=b35e3a8ed01f21c801a010b657d9a56d&type=album',
//   },
//   {
//     name: 'Smirnoff The Electrician',
//     about: 'Electrician',
//     avatar:
//       'https://sun9-7.userapi.com/impg/c855424/v855424919/250d68/yLixoVlbHhU.jpg?size=1045x1045&quality=96&sign=8b3e6021281d710907eb9f716e00418c&type=album',
//   },
//   {
//     name: 'Dasha',
//     about: 'Female alter ego',
//     avatar:
//       'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
//   },
//   {
//     name: 'User without Avatar',
//     about: 'Male alter ego',
//   },
//   {
//     name: 'User without Avatar',
//     about: 'Male alter ego',
//   },
// ];
