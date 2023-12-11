import React from 'react'
import './Projets.scss'
import Projet from './Projet.jsx'

const Projets = () => {
  return (
    <div className='projects'>
        <h1>Projets</h1>
        <div className="jeux">
            <Projet color="#FF0000" img="./src/assets/vog-logo.png" />
        </div>
        <div className="autres">

        </div>
    </div>
  )
}

export default Projets