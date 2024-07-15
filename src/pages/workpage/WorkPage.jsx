import React from 'react'
import "./WorkPage.css"
import pic1 from "../../assets/images/work1.jpeg"
import pic2 from "../../assets/images/work2.jpeg"
import pic3 from "../../assets/images/work3.jpeg"
import pic4 from "../../assets/images/work4.jpeg"
import { works } from '../../data/landingpagedata/WorkData'
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
