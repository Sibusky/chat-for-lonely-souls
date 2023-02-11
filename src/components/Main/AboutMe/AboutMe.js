import React from 'react';
import './AboutMe.css';
import aboutmePhoto from '../../../images/aboutme-photo.jpg';

export default function AboutMe() {
  return (
    <section className='aboutme'>
      <h2 className='aboutme__title'>Creator</h2>
      <div className='aboutme__info-container'>
        <div className='aboutme__info-text-container'>
          <h3 className='aboutme__info-name'>Aleksei Smirnov</h3>
          <h4 className='aboutme__info-bio'>Web Developer</h4>
          <ul className='aboutme__info-description-list'>
            <li className='aboutme__info-description'>
              - Graduated from university in 2010 as the Master of Engineering
              and Technology.
            </li>
            <li className='aboutme__info-description'>
              - From then onwards worked in the field of Power Supply.
            </li>
            <li className='aboutme__info-description'>
              - Since 2016 started to work for myself as self employed.
            </li>
            <li className='aboutme__info-description'>
              - During these 7 years I made my way from lone electrician to
              leader of a crew
            </li>
            <li className='aboutme__info-description'>
              - Me and my squad made almost 700 pieces of work (household
              electric circuit renovation, electric panel assembling etc).
            </li>
            <li className='aboutme__info-description'>
              - Since the end of 2011 I have been fascinated by learning
              JavaScript, HTML, CSS, React.
            </li>
            <li className='aboutme__info-description'>
              - Apart from Frontend development I've learned Backend as well
              (Node.js + Express).
            </li>
            <li className='aboutme__info-description'>
              - I've realized a service as a pet-project which was used by 200+
              people during last month. It was the Georgian alphabet trainer.
            </li>
          </ul>
          <a
            className='aboutme__info-github link'
            href='https://github.com/Sibusky'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img
          className='aboutme__info-photo'
          src={aboutmePhoto}
          alt='Фото студента'
        />
      </div>
    </section>
  );
}
