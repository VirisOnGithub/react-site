import React from 'react'
import Header from './Header'
import Projets from './Projets'
import Presentation from './Presentation'

const Accueil = () => {
  return (
    <>
        <Header />
        <Presentation />
        <section id='projects'>
          <Projets />
        </section>
    </>
  )
}

export default Accueil