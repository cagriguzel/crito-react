import React from 'react'
import Header from '@components/Header/Header'
import ContactInformation from '../components/ContactInformation/ContactInformation'
import MessageBox from '../components/MessageBox/MessageBox'
import Maps from '../components/Maps/Maps'
import Footer from '../components/Footer/Footer'
import Showcase2 from '../components/Showcase2/Showcase2'

const Contact = () => {
  return (
    <>
      <div className='wrapper-grid'>
        <Header/>
        <Showcase2 text="Let's Connect"/>
        <ContactInformation/>
        <MessageBox/>
        <Maps/>
        <Footer/>
      </div>
    </>
  )
}

export default Contact