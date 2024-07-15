import React from 'react'
import './RecentPosts.css'
import BlogsCard from '../../blogspagecomponents/BlogsCard'
import blogs from '../../../data/landingpagedata/LandingPage'
import { Link } from 'react-router-dom'
export default function RecentPosts() {
  return (
    <div className='recentposts'>
      <div className='recent-posts-header'>
        <p>Recent Posts</p>
        <p><Link to="">View All</Link></p>
      </div>
      <div className="blogs-card-container">
      {blogs.map((blog)=>(
        <BlogsCard header={blog.header} paragraph={blog.paragraph}/>
      ))}
      </div>
    </div>
  )
}
