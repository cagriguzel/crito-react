import React from 'react'
import Button from '../Generics/Button'
import showImage from'../../assets/images/showcase-image.svg'

const Showcase = () => {


  return (
    <>            
    <section className="showcase">
      <img className="background-lines" src="images/background-lines.svg" alt=""/>
      <div className="container">
          <div className="content">
              <h1>We Provide The Best Business Solutions</h1>
              <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
              <div className='showCaseButtons'>
              <Button type="yellow" url="/consulting.html" text="Get Consulting" />
              <Button type="transparent" url="/about.html" text="Learn More" />
              </div>
          </div>
          <img src={showImage} alt="image of a man in a suit with a tablet "/>
      </div>  
    </section>
</>
  )
}

export default Showcase