import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className='login'>
      <div className='login__container'>
        <h2 className='login__welcome'>Welcome!</h2>
        <form
          className='login__form'
          //  onSubmit={handleSubmit}
        >
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
                  //   readOnly={isFetching && true}
                  id='login__input-name'
                  type='text'
                  placeholder=''
                  name='password'
                  minLength='2'
                  maxLength='20'
                  //   onChange={handleChange}
                  //   value={values.password ? values.password : ''}
                  required
                />
                {/* <span id='error-login-password' className='login__error'>
                  {errors.password}
                </span> */}
              </li>
              <li className='login__input-item'>
                <label
                  className='login__input-label'
                  htmlFor='login__input-email'
                >
                  E-mail
                </label>
                <input
                  className='login__input'
                  //   readOnly={isFetching && true}
                  id='login__input-email'
                  type='email'
                  placeholder=''
                  pattern='^.+@.+\..+$'
                  name='email'
                  //   onChange={handleChange}
                  //   value={values.email ? values.email : ''}
                  required
                />
                {/* <span id='error-login-email' className='login__error'>
                  {errors.email}
                </span> */}
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
                  //   readOnly={isFetching && true}
                  id='login__input-avatar'
                  type='url'
                  placeholder=''
                  name='avatar'
                  //   onChange={handleChange}
                  //   value={values.password ? values.password : ''}
                  required
                />
                {/* <span id='error-login-password' className='login__error'>
                  {errors.password}
                </span> */}
              </li>
            </ul>
          </fieldset>
          <button
            // disabled={!isValid || isFetching ? true : false}
            className='login__submit-btn button'
            type='submit'
          >
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
