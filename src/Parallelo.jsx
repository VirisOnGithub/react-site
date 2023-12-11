import React from 'react'
import './Parallelo.scss'

const Parallelo = (p) => {
  return (
    <div className="parallelo" style={{"backgroundColor": p.color}}></div>
  )
}

export default Parallelo