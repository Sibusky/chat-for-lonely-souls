import React from 'react';
import './HowToUse.css';
import ChatScreenshot from '../../../images/Chat-screenshot.png';
import { Link } from 'react-router-dom';

export default function HowToUse({ scrollHendler }) {
  return (
    <section className='howtouse'>
      <div className='howtouse__container'>
        <img
          className='howtouse__container-image'
          src={ChatScreenshot}
          alt='Chat Screenshot'
        />
        <div className='howtouse__container-text-and-buttons'>
          <div className='howtouse__container-instructions'>
            <h1 className='howtouse__container-title'>Lonely Soul Chat</h1>
            <p className='howtouse__container-instruction'>
              1. Open as much tabs with this app in your browser as you want
            </p>
            <p className='howtouse__container-instruction'>
              2. On each press the Button to introduce yourself and start self
              conversation
            </p>
            <Link className='howtouse__container-button-link' to='/login'>
              <button className='howtouse__container-button button'>
                Button
              </button>
            </Link>
          </div>
          <div className='howtouse__container-know-better'>
            <p className='howtouse__container-know-better-text'>
              or stick around and get to know me better
            </p>
            <button
              className='howtouse__container-know-better-button button'
              onClick={scrollHendler}
            >
              Know me better
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
