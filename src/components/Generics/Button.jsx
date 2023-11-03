import React from 'react'

const Button = ({type, url, text}) => {

  const getButtonClassName = () => {
    switch(type) {
      case 'black' :
        return 'btn-black'
      case 'transparent' : 
        return 'btn-transparent'
      default:
        return 'btn-yellow'
    }
}
  return (
    <a className={getButtonClassName()} href={url}>{text} <i className="fa-light fa-arrow-up-right"></i></a>
  )
}

export default Button