import React from 'react'
import Gallary from '../Gallary/Gallary'
import GallaryHeader from '../GallaryHeader/GallaryHeader'
import './Home.css'


const Home = () => {

   
  return (
    <div className='home-layout'>
      <div className="home-container">

        <GallaryHeader></GallaryHeader>
        <Gallary></Gallary>
      </div>
    </div>
  )
}

export default Home