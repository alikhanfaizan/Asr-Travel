import React from 'react'
import Explore from '../components/Explore'
import Testimonial from '../components/Testimonial'
import Trend from '../components/Trend'
import Promotion from '../components/Promotion'

const About = () => {
  return (
    <div>
        <Promotion/>
        <Trend/>
        <Explore/>
        <Testimonial/>
    </div>
  )
}

export default About