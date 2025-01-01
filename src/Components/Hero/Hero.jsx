import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import hero_image from '../Assets/image_20.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals only</h2>
         <div>
            <div className="hero-hand-icon">
                <p>Unleash</p>
                
                {/* <img src={hand_icon} alt="" /> 👋*/}

            </div>
            <p>Your Inner </p>
            <p>Sparkle!</p>
         </div>
         <div className="hero-latest-btn">
            <div>
                Letest Collection
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
            </div>
            {/* <img src={arrow_icon} alt="" /> */}
         </div>
      </div>
    



    <div className="hero-right">
    <img src={hero_image} alt="" />
    </div>
    </div>
  )
}

export default Hero
