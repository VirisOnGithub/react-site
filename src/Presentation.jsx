import React from 'react'
import Typed from 'react-typed'
import './Presentation.scss'

const Presentation = () => {
    const redirectToProjects = () => {
        window.location.href = '#projects';
    };

    return (
        <div className="presentation">
                <Typed 
                        strings={[
                                'Hey ! Je suis <strong>Clément</strong>.', 
                                'Je suis <strong>élève ingénieur</strong>.', 
                                'Je suis <strong>étudiant à Polytech Lyon</strong>.', 
                                'Je suis passionné par <strong>l\'informatique</strong>.', 
                                'Je suis passionné par <strong>les mathématiques</strong>.'
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        className='presentation__title'
                />
                <button className="presentation__button" onClick={redirectToProjects}>Projets</button>
        </div>
    )
}

export default Presentation