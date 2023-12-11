import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header>
        <img src="src/assets/vog-logo.png" alt="logo" />
        <h1>VirisOnGithub</h1>
        <a href='#'>Accueil</a>
        <a href='#projets'>Projets</a>
        <a href='#apropos'>A propos</a>
    </header>
  )
}

export default Header