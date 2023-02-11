import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.css';

export default function Layout() {
  return (
    <div className='layout'>
      <Outlet />
      <Footer />
    </div>
  );
}
