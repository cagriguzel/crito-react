import React from 'react'
import Button from '../Generics/Button'
import showImage from'../../assets/images/showcase-image.svg'

const Showcase = () => {


  return (
    <>            
    <section class="showcase">
      <img class="background-lines" src="images/background-lines.svg" alt=""/>
      <div class="container">
          <div class="content">
              <h1>We Provide The Best Business Solutions</h1>
              <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
              <Button type="yellow" url="/consulting.html" text="Get Consulting" />
              <Button type="transparent" url="/about.html" text="Learn More" />
          </div>
          <img src={showImage} alt="image of a man in a suit with a tablet "/>
      </div>  
    </section>
</>
  )
}

export default Showcase