import React from 'react';
import HowToUse from './HowToUse/HowToUse';
import AboutMe from './AboutMe/AboutMe';
import './Main.css';
import Portfolio from './Portfolio/Portfolio';

export default function Main() {
  return (
    <main className='main'>
      <HowToUse />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
