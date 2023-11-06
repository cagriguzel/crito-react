import React from 'react'
import TestimonialHeader from './TestimonialHeader';
import TestimonialBox from './TestimonialBox';
import './Testimonial.css';



const Testimonial = () => {
  return (
    <>
        <div className='Testimonial'>
            <div className='container'>
                <TestimonialHeader/>
                <TestimonialBox/>
            </div>
        </div>

    </>
  )
}

export default Testimonial;


