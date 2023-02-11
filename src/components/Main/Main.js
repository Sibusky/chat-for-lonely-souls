import React, { useRef } from 'react';
import HowToUse from './HowToUse/HowToUse';
import AboutMe from './AboutMe/AboutMe';
import './Main.css';
import Portfolio from './Portfolio/Portfolio';

export default function Main() {
  const refScroll = useRef();
  const scrollHendler = () => {
    refScroll.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <main className='main'>
      <HowToUse scrollHendler={scrollHendler}/>
      <AboutMe scroll={refScroll} />
      <Portfolio />
    </main>
  );
}
