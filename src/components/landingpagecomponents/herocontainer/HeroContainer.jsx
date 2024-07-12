import React from 'react'
import "./HeroContainer.css"
import { profile } from '../../../assets/images'
export default function HeroContainer() {
  return (
    <div className='landingHero'>
    <div className='landingHeroLeft'>
        <h1>Hi, I am Marya, a creative Technologist</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio natus voluptatum illo quisquam facere placeat quasi impedit. Quibusdam dignissimos eos corporis expedita! Minus veritatis alias eaque mollitia temporibus impedit.</p>
        <button>Download Resume</button>
    </div>
    <div className='landingHeroRight'>
        <img src={profile} alt="image of hero section" />
    </div>
  </div>
  )
}
