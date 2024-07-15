import React from 'react'
import "./WorkPage.css"
import { works } from '../../Data/landingpagedata/WorkData'
import WorkCard from '../../components/workcardcomponent/WorkCard'

export default function WorkPage() {
  return (
    <>
    <section className='Work'>
      <div className='work-heading'>
        <h1>work</h1>
      </div>
      {works.map((work, i)=>(
        <WorkCard key={i} picture={work.picture} tagtitle={work.tagtitle} year={work.year} subtitle={work.subtitle} message={work.message} />
      ))}
    
    </section>
    </>
  )
}
