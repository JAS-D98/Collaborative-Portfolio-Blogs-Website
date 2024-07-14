import React from 'react'
import "./BlogsPage.css"
import blogs from '../../Data/Blogspage'

const Blogcard = ({header, paragraph}) => {
  return(
    <>
      <h3>{header}</h3>
      <h5>12 Feb 2019 | <span>Express, Handlebars</span></h5>
      <p>{paragraph}</p>
      <hr />
    </>
  )
}

export default function BlogsPage() {
  return (
    <div className='Blog'>
      <div>
      <h1>Blog</h1>
      </div>
      <div>
        {blogs.map((current, i) => (
          <Blogcard
          key={i}
          header={current.header}
          paragraph={current.paragraph}
          />
        ))}
      </div>
    </div>
  )
}
