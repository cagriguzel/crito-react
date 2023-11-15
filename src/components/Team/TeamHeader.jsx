import React from 'react'
import SectionHeader from '../Generics/SectionHeader'
import Button from '../Generics/Button'
import './TeamHeader.css';

const Team = () => {
  return (
    <>
    <section className='ourTeam'>
      <div className='container'>
        <div className='header'>
          <SectionHeader title="Meet Our Team" description='Experience Team Members' />
        </div>
        <div className='custom-button'>
          <Button className="custom-button" type='yellow-black' text='Browse Team' url='/team' />
        </div>
      </div>  
    </section>
    </>
  )
}

export default Team