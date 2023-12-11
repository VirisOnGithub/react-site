import React from 'react'
import './Projet.scss'
import Parallelo from './Parallelo'

const Projet = (p) => {
  return (
    <div className='container'>
        <Parallelo color={p.color} />
        <img className='imgProject' src={p.img} />
    </div>
  )
}

export default Projet