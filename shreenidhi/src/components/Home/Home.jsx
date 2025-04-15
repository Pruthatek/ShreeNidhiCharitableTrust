import React from 'react'
import Hero from './Hero'
import Madhuri from './Madhuri'
import ShreeNidhi from './ShreeNidhi'
import Nachiketa from './Nachiketa'
import Achievements from './Achievements'
import Publication from './Publication'
import Pillars from './Pillars'
import Donation from './Donation'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div className='bg-[#F9F9F9] py-5'>
      <Helmet>
        <title>Home | Shree Nidhi Charitable Trust</title>
        <meta name="keywords" content="home, trust, charity, foundation" />
        <meta name="description" content="Home page of Shree Nidhi Charitable Trust, dedicated to social welfare." />
      </Helmet>
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
