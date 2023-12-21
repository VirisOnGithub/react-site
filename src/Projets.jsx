import React from 'react'
import './Projets.scss'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Parallax } from 'react-scroll-parallax';

const Projets = () => {

  const gamesslides = [
    {
      title : 'Useless Knowledge',
      description : 'Un jeu de culture générale',
      image : './src/assets/uk-icon.ico'
    },
    {
      title : 'Capitals',
      description : 'Un jeu de géographie',
      image : './src/assets/icon-capitals.png'
    },
    {
      title: 'WordsCounter',
      description: 'Un compteur de mots',
      image: './src/assets/icon-wc.png'
    },
    {
      title: 'Idle Game',
      description: 'Un jeu de gestion',
      image: './src/assets/icon-idle.png'
    }
  ];

  const othersslides = [
    {
      title : 'PolyTuto',
      description : 'Fiches de tutorat pour les étudiants de Polytech Lyon',
      image : './src/assets/icon-tutorat.png'
    },
    {
      title : 'DMO',
      description : 'Tous les cours de maths de PEIP2 avec les démonstrations séparées',
      image : './src/assets/icon-DMO.png'
    },
    {
      title : 'DocsMarkdown',
      description : 'Une documentation sur le Markdown',
      image : './src/assets/icon-docsmarkdown.png'
    },
    {
      title : 'DocsSDL',
      description : 'Une documentation sur la SDL',
      image : './src/assets/icon-docssdl.png'
    },
    {
      title : 'DocsSFML',
      description : 'Une documentation sur la SFML',
      image : './src/assets/icon-docssfml.png'
    },
  ];

  return (
    <div className='projects'>
      <Parallax translateY={-20} speed={-50}>
        <h1>Projets</h1>
        <div className="jeux">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            className='swiper'
            effect='slide'
            parallax={true}
            centeredSlides={true}
            speed={1000}
            loop={true}
          >
            {gamesslides.map((slide, index) => (
              <SwiperSlide key={index} className='swiperslide'>
                <div className="slide">
                  <img src={slide.image} alt={slide.title} loading='lazy'/>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h1>Autres</h1>
        <div className="autres">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            className='swiper'
            effect='slide'
            parallax={true}
            centeredSlides={true}
            speed={1000}
            loop={true}
          >
            {othersslides.map((slide, index) => (
              <SwiperSlide key={index} className='swiperslide'>
                <div className="slide">
                  <img src={slide.image} alt={slide.title} />
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Parallax>
    </div>
  )
}

export default Projets