import React, { useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import HowToUse from './HowToUse/HowToUse';
import AboutMe from './AboutMe/AboutMe';
import './Main.css';
import Portfolio from './Portfolio/Portfolio';

export default function Main({ isLoggedIn }) {
  const refScroll = useRef();
  const scrollHendler = () => {
    refScroll.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  let location = useLocation();

  // Если вход выполнен, то перекидываю на страницу с чатом
  if (isLoggedIn) {
    return <Navigate to='/chat' state={{ from: location }} replace />;
  }

  return (
    <main className='main'>
      <HowToUse scrollHendler={scrollHendler} />
      <AboutMe scroll={refScroll} />
      <Portfolio />
    </main>
  );
}
