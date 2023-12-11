import React from 'react'
import './Projet.scss'

const Projet = (p) => {
  return (
    <div className="card">
        <div className="card-inner">
            <div className="card-front">
                <img src={p.imgsrc} width={p.imgwidth+'px'} alt="feur"/>
            </div>
            <div className="card-back" onClick={()=> window.location.href=p.redirect}>
                <ul className="card-desc">
                    <li><h1 style={{fontSize: "1.3em"}}>{p.title}</h1></li>
                    <li><p>{p.desc}</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Projet