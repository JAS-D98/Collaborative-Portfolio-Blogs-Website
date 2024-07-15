import React from 'react'
import './FeauteredWorks.css'
import WorkCard from '../../workcardcomponent/WorkCard'
import { works } from '../../../Data/landingpagedata/WorkData'
export default function FeauteredWorks() {
  return (
    <div className='featured-container'>
      <p>FeauteredWorks</p>
      {works.map((work, i)=>(
        <WorkCard key={i} picture={work.picture} tagtitle={work.tagtitle} year={work.year} subtitle={work.subtitle} message={work.message} />
      ))}
    </div>
  )
}
