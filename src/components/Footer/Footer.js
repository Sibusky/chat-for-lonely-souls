import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Pet-project Lonely Soul Chat
      </p>
      <div className='footer__copyright-and-links-container'>
        <p className='footer__copyright'>&copy; Aleksei Smirnov 2023</p>
        <nav className='footer__nav'>
          <ul className='footer__nav-list'>
          <li className='footer__nav-list-item'>
              <a
                className='footer__nav-list-link link'
                href='mailto:5325388@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                Gmail
              </a>
            </li>
            <li className='footer__nav-list-item'>
              <a
                className='footer__nav-list-link link'
                href='https://t.me/sibusky'
                target='_blank'
                rel='noreferrer'
              >
                Telegram
              </a>
            </li>
            <li className='footer__nav-list-item'>
              <a
                className='footer__nav-list-link link'
                href='https://vk.com/sibusky'
                target='_blank'
                rel='noreferrer'
              >
                VK
              </a>
            </li>
            <li className='footer__nav-list-item'>
              <a
                className='footer__nav-list-link link'
                href='https://github.com/Sibusky'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
