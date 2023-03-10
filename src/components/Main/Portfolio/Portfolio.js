import React from 'react';
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h4 className='portfolio__title'>Other projects</h4>
        <nav className='portfolio__navigation'>
          <ul className='portfolio__navigation-list'>
            <li className='portfolio__navigation-list-item'>
              <a
                className='portfolio__static-site-link portfolio__links-item link'
                href='https://sibusky.github.io/how-to-learn/index.html'
                target='_blank'
                rel='noreferrer'
              >
                <p className='portfolio__navigation-list-item-text'>
                  Static web site
                </p>
                <div className='portfolio__arrow'></div>
              </a>
            </li>
            <li className='portfolio__navigation-list-item'>
              <a
                className='portfolio__adaptive-site-link portfolio__links-item link'
                href='https://sibusky.github.io/russian-travel/index.html'
                target='_blank'
                rel='noreferrer'
              >
                <p className='portfolio__navigation-list-item-text'>
                  Adaptive layout web site
                </p>
                <div className='portfolio__arrow'></div>
              </a>
            </li>
            <li className='portfolio__navigation-list-item'>
              <a
                className='portfolio__spa-link portfolio__links-item link'
                href='https://asmirnov.students.nomoredomains.icu'
                target='_blank'
                rel='noreferrer'
              >
                <p className='portfolio__navigation-list-item-text'>
                  SPA Image Explorer. Front (React.js), Back (Node.js)
                </p>
                <div className='portfolio__arrow'></div>
              </a>
            </li>
            <li className='portfolio__navigation-list-item'>
              <a
                className='portfolio__spa-link portfolio__links-item link'
                href='https://bitfilms.smirnov.nomoredomains.icu/'
                target='_blank'
                rel='noreferrer'
              >
                <p className='portfolio__navigation-list-item-text'>
                  SPA Movies Explorer. Front (React.js), Back (Node.js)
                </p>
                <div className='portfolio__arrow'></div>
              </a>
            </li>
            <li className='portfolio__navigation-list-item'>
              <a
                className='portfolio__georgian-link portfolio__links-item link'
                href='https://sibusky.github.io/georgian-alphabet/'
                target='_blank'
                rel='noreferrer'
              >
                <p className='portfolio__navigation-list-item-text'>
                  Georgian alphabet trainer
                </p>
                <div className='portfolio__arrow'></div>
              </a>
            </li>
            <li className='portfolio__navigation-list-item'>
              <a
                className='portfolio__proelectro-link portfolio__links-item link'
                href='https://www.figma.com/file/ZoScQwGqrOQ2bAng5X2Yq3/ProElectro-site?node-id=0%3A1'
                target='_blank'
                rel='noreferrer'
              >
                <p className='portfolio__navigation-list-item-text'>
                  Figma layout
                </p>
                <div className='portfolio__arrow'></div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
