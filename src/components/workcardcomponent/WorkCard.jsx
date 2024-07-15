import React from 'react'
import './WorkCard.css'
export default function WorkCard({picture, tagtitle, year, subtitle, message}) {
  return (
    <div className='work-card'>
    <div className='work-image'>
      <img src={picture} alt="" />
    </div>
    <div className='image-details'>
      <div className='details-heading'>
        <h2>{tagtitle}</h2>
      </div>
      <div className='details-about'>
        <h4>{year}</h4>
        <h6>{subtitle}</h6>
      </div>
      <div className='details-description'>
        <p>{message}</p>
      </div>
    </div>
  </div>
  )
}
