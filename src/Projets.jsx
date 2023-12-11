import React from 'react'
import Projet from './Projet'

const Projets = () => {
  return (
    <div className='projects'>
        <h1>Projets</h1>
        <div className="jeux">
            <Projet imgsrc="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/03/web-images.jpg" imgwidth="240" redirect="google" title="Google" desc="un moteur de recherche" />
        </div>
        <div className="autres">

        </div>
    </div>
  )
}

export default Projets