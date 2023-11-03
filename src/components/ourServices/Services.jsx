import React from 'react'
import ServiceBox from './ServiceBox'
import Button from '../Generics/Button'
import SectionHeader from '../Generics/SectionHeader'

const Services = () => {
  return (
    <>
    <section className="our-services">
      <img className="background-right-lines" src="images/background-lines-white-right.svg" alt="" />
      <div className="container">
        <SectionHeader title="Our Services" description="We Provide The Best Service Consulting" />
        <div className="service-boxes">
          <ServiceBox title="Business Advice"/>
          <ServiceBox title="Startup Business"/>
          <ServiceBox title="Financial Advice"/>
          <ServiceBox title="Risk Management"/>
        </div>
        <Button type="transparent" text="Browse Services" url="/Ser" />
      </div>
    </section>    
    </>
  )
}

export default Services