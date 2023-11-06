import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer'
import Showcase from '@components/Showcase/Showcase'
import Partners from '../components/Partners'
import Features from '../Features/Features'
import About from '../components/About/About'
import Services from '@components/ourServices/Services'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import ProjectCase from '../components/Projects/ProjectCase'
import Team from '../components/Team/Team'
import Testimonial from '../components/Testimonial/Testimonial'



const Home = () => {
  return (
    <>
      <div className='wrapper-grid'>
        <Header/>
        <Showcase/>
        <Partners/>
        <Features/>
        <About/>
        <Services/>
        <ChooseUs/>
        <ProjectCase/>
        <Team/>
        <Testimonial/>
        <Footer/>
      </div>
    
    </>
  )
}

export default Home