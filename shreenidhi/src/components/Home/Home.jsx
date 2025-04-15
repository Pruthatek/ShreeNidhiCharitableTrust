import React from 'react'
import Hero from './Hero'
import Madhuri from './Madhuri'
import ShreeNidhi from './ShreeNidhi'
import Nachiketa from './Nachiketa'
import Achievements from './Achievements'
import Publication from './Publication'
import Pillars from './Pillars'
import Donation from './Donation'

const Home = () => {
  return (
    <div className='bg-[#F9F9F9] py-5'>
      <Hero/>
      <Madhuri/>
      <ShreeNidhi/>
      <Nachiketa/>
      <Achievements/>
      <Publication/>
      <Pillars/>
      <Donation/>
    </div>
  )
}

export default Home
