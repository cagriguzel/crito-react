import React from 'react'
import Footer from '../components/Footer/Footer'
import notFound from '../assets/images/notFound.svg'

const NotFound = () => {
  return (
    <>
    <div className='NotFound'>
      <img className='notFoundPic' src={notFound} alt="" />
    
    </div>
      <Footer/>
    </>
  )
}

export default NotFound