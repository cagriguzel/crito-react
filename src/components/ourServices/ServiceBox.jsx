import React from 'react'

const ServiceBox = ({title}) => {
  return (
    <>
        <div className="box">
            <i className="fa-light fa-horizontal-rule"></i>
            <h5>{title}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, hic?</p>
            <i id="arrow-right" className="fa-light fa-circle-arrow-right" style={{ color: '#000000' }}></i>
        </div> 
    </>
  )
}

export default ServiceBox