import React from 'react'
import "./LandingPage.css"
import HeroContainer from '../../components/landingpagecomponents/herocontainer/HeroContainer'
import RecentPosts from '../../components/landingpagecomponents/recentposts/RecentPosts'
import FeauteredWorks from '../../components/landingpagecomponents/feauteredworks/FeauteredWorks'
export default function LandingPage() {
  return (
    <div className="landingPage">
      <HeroContainer/>
      <RecentPosts/>
      <FeauteredWorks/>
    </div>
  )
}
