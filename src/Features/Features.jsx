import React from 'react'
import FeaturesBox from './FeaturesBox'
import Button from '../components/Generics/Button'
import SectionHeader from '../components/Generics/SectionHeader'

const Features = () => {
  return (
    <>  
      <section className="features">
        <div className="container">
          <div className="features-left">
              <SectionHeader title="Features" description="Our Accounting is trusted by thousand of companies"/>
              <Button type="yellow" text="Learn More" url="/features"/>
          </div>
          <div className="features-right">
              <FeaturesBox icon="fa-handshake" title="Business Advice" />
              <FeaturesBox icon="fa-sharp fa-light fa-lightbulb" title= "Startup Business" />
              <FeaturesBox icon="fa-solid fa-chart-mixed" title="Financial Advice"/>
              <FeaturesBox icon="fa-regular fa-head-side-gear" title="Risk Management"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features