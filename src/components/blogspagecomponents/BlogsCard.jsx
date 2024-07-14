import React from 'react'
import './BlogsCard.css'
export default function BlogsCard({header, paragraph}) {
  return (
    <div className="blogs-card">
      <h3>{header}</h3>
      <h5>12 Feb 2019 | <span>Express, Handlebars</span></h5>
      <p>{paragraph}</p>
    </div>
  )
}
