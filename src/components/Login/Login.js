import React from 'react';
// import { Helmet } from 'react-helmet';
import { Link, Navigate, useLocation } from 'react-router-dom';
import './Login.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function Login({ handleLogin, isLoggedIn }) {
  const {values, handleChange} = useFormWithValidation();

  // Если вход выполнен, то перекидываю на страницу с чатом
  let location = useLocation();
  if (isLoggedIn) {
    return <Navigate to='/chat' state={{ from: location }} replace />;
  }

  console.log(isLoggedIn, 'isLoggedIn in login');

  // Обработчик формы
  function handleSubmit(e) {
    e.preventDefault();
    const { name, about, avatar } = values;
    handleLogin({ name, about, avatar });
  }

  return (
    <main className='login'>
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <div className='login__container'>
        <h2 className='login__welcome'>Welcome!</h2>
        <form className='login__form' onSubmit={handleSubmit}>
          <fieldset className='login__form-fieldset'>
            <ul className='login__input-list'>
              <li className='login__input-item'>
                <label
                  className='login__input-label'
                  htmlFor='login__input-avatar'
                >
                  Name
                </label>
                <input
                  className='login__input'
                  id='login__input-name'
                  type='text'
                  placeholder=''
                  name='name'
                  minLength='2'
                  maxLength='20'
                  onChange={handleChange}
                  value={values.name ? values.name : ''}
                  required
                />
              </li>
              <li className='login__input-item'>
                <label
                  className='login__input-label'
                  htmlFor='login__input-about'
                >
                  About
                </label>
                <input
                  className='login__input'
                  id='login__input-about'
                  type='text'
                  placeholder=''
                  name='about'
                  minLength='2'
                  maxLength='30'
                  onChange={handleChange}
                  value={values.about ? values.about : ''}
                  required
                />
              </li>
              <li className='login__input-item'>
                <label
                  className='login__input-label'
                  htmlFor='login__input-avatar'
                >
                  Avatar link
                </label>
                <input
                  className='login__input'
                  id='login__input-avatar'
                  type='url'
                  placeholder=''
                  name='avatar'
                  onChange={handleChange}
                  value={values.avatar ? values.avatar : ''}
                />
              </li>
            </ul>
          </fieldset>
          <button className='login__submit-btn button' type='submit'>
            Login
          </button>
        </form>
        <p className='login__signin'>
          Or go back to
          <Link to='/' className='login__signin-link link'>
            &nbsp;Main Page
          </Link>
        </p>
      </div>
    </main>
  );
}
