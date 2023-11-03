import React from 'react'

const FeaturesBox = ({icon, title }) => {
  return (
    <>
        <div className="icon">
            <i className={`fa-thin ${icon}`}></i>
            <h4>{title}</h4> 
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p> 
        </div>
    </>
  )
}

export default FeaturesBox