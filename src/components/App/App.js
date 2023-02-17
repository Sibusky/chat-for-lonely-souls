import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import debounce from 'lodash.debounce';
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
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // let location = useLocation();

  let navigate = useNavigate();

  // Отслеживаю ширину окна
  const handleResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 100);

  // Устанавливаю слушатель событий на размер окна
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

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
      handleLogout();
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
    console.log(name, about, avatar, 'name, about, avatar');
    setCurrentUser({
      id: currentUser.id,
      name: name,
      about: about,
      avatar: avatar,
    });

    console.log(currentUser, 'currentUser');

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

    console.log(JSON.parse(localStorage.getItem('users')), 'localStorage');
    console.log(sessionStorage, 'sessionStorage');

    handleClosePopup();
    // location.href=location.href;
    handleCheckLogin();
  };
  // console.log(currentUser);

  const handleLogout = () => {
    setCurrentUser({
      id: '',
      name: '',
      about: '',
      avatar: '',
    });
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

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
                    windowSize={windowSize}
                    handleLogout={handleLogout}
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
