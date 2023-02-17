import React from 'react';
import './UserEditForm.css';
import { useFormWithValidation } from '../../../../hooks/useFormWithValidation';

export default function UserEditForm({ handleSubmit }) {
  const { values, handleChange, resetForm } = useFormWithValidation();

  return (
    <form
      className='popup__user-edit-form'
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(values.name, values.about, values.avatar);
        resetForm();
      }}
    >
      <fieldset className='popup__form-fieldset'>
        <ul className='popup__input-list'>
          <li className='popup__input-item'>
            <label className='popup__input-label' htmlFor='popup__input-avatar'>
              Name
            </label>
            <input
              className='popup__input'
              id='popup__input-name'
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
          <li className='popup__input-item'>
            <label className='popup__input-label' htmlFor='popup__input-about'>
              About
            </label>
            <input
              className='popup__input'
              id='popup__input-about'
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
          <li className='popup__input-item'>
            <label className='popup__input-label' htmlFor='popup__input-avatar'>
              Avatar link
            </label>
            <input
              className='popup__input'
              id='popup__input-avatar'
              type='url'
              placeholder=''
              name='avatar'
              onChange={handleChange}
              value={values.avatar ? values.avatar : ''}
            />
          </li>
        </ul>
      </fieldset>
      <button className='popup__submit-btn button' type='submit'>
        Edit
      </button>
    </form>
  );
}
