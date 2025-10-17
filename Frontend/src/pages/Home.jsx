import React from 'react'
import Category from '../components/Category'
import TopDestinations from '../components/TopDestinations'
import Testimonial from '../components/Testimonial'
import EasyAndFast from '../components/EasyAndFast'
import Logos from '../components/Logos'
import Subsctibe from '../components/Subsctibe'

const Home = () => {
  return (
    <div>
      <Category/>
      <TopDestinations/>
      <EasyAndFast/>
      <Testimonial/>
      <Logos/>
      <Subsctibe/>

    </div>
  )
}

export default Home