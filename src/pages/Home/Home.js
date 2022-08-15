import React from 'react'
import "./Home.scss"
import Feed from '../../componenet/feed/Feed'
import SideBar from '../../componenet/sideBar/SideBar'
import TopBar from '../../componenet/TopBar/TopBar'
import RightBar from '../../componenet/rightBar/RightBar'

const Home = () => {
  return (
      <>
      <TopBar/>
      <div className='homeContainer'>
      <SideBar/>
      <Feed/>
      <RightBar/>


    </div>
    </>
  )
}

export default Home
