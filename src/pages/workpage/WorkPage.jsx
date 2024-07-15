import React from 'react'
import "./WorkPage.css"
import pic1 from "../../assets/images/work1.jpeg"
import pic2 from "../../assets/images/work2.jpeg"
import pic3 from "../../assets/images/work3.jpeg"
import pic4 from "../../assets/images/work4.jpeg"

export default function WorkPage() {
  return (
    <>
    <section className='Work'>
      <div className='work-heading'>
        <h1>work</h1>
      </div>
    <div className='work-card'>
      <div className='work-image'>
        <img src={pic1} alt="" />
      </div>
      <div className='image-details'>
        <div className='details-heading'>
          <h2>Designing Dashboards</h2>
        </div>
        <div className='details-about'>
          <h4>2020</h4>
          <h6>Dashboard</h6>
        </div>
        <div className='details-description'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt accusantium exercitationem recusandae corporis iusto, error excepturi distinctio impedit, iste illo ex sapiente cumque officia, reprehenderit pariatur.</p>
        </div>
      </div>
    </div>
    <div className='work-card'>
      <div className='work-image'>
        <img src={pic2} alt="" />
      </div>
      <div className='image-details'>
        <div className='details-heading'>
          <h2>vibrant potraits of 2020</h2>
        </div>
        <div className='details-about'>
          <h4>2018</h4>
          <h6>illustration</h6>
        </div>
        <div className='details-description'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt accusantium exercitationem recusandae corporis iusto, error excepturi distinctio impedit, iste illo ex sapiente cumque officia, reprehenderit pariatur.</p>
        </div>
      </div>
    </div>
    <div className='work-card'>
      <div className='work-image'>
        <img src={pic3} alt="" />
      </div>
      <div className='image-details'>
        <div className='details-heading'>
          <h2>36 days of malayalam type</h2>
        </div>
        <div className='details-about'>
          <h4>2018</h4>
          <h6>typography</h6>
        </div>
        <div className='details-description'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt accusantium exercitationem recusandae corporis iusto, error excepturi distinctio impedit, iste illo ex sapiente cumque officia, reprehenderit pariatur.</p>
        </div>
      </div>
    </div>
    <div className='work-card'>
      <div className='work-image'>
        <img src={pic4} alt="" />
      </div>
      <div className='image-details'>
        <div className='details-heading'>
          <h2>Components</h2>
        </div>
        <div className='details-about'>
          <h4>2018</h4>
          <h6>Components, Design</h6>
        </div>
        <div className='details-description'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt accusantium exercitationem recusandae corporis iusto, error excepturi distinctio impedit, iste illo ex sapiente cumque officia, reprehenderit pariatur.</p>
        </div>
      </div>
    </div>
    
    </section>
    </>
  )
}
