import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <>
      <header>
          <img className='header' src="src/assets/vog-logo.png" alt="logo" />
          <h1 className='header'>VirisOnGithub</h1>
          <a className='header' href='#'>Accueil</a>
          <a className='header' href='#projets'>Projets</a>
          <a className='header' href='#apropos'>A propos</a>
      </header>
      <div className="headercontainer"></div>
    </>
  )
}

export default Header