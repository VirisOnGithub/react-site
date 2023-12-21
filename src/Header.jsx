import React from 'react'
import './Header.scss'
import { useState, useEffect } from 'react';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isAtTop ? '' : 'ombre'}>
          <img className='header' src="src/assets/vog-logo.png" alt="logo" />
          <h1 className='header'>Clément RENIERS</h1>
          <a className='header' href='#'>Accueil</a>
          <a className='header' href='#projets'>Projets</a>
          <a className='header' href='#apropos'>A propos</a>
      </header>
      <div className="headercontainer"></div>
    </>
  )
}


export default Header