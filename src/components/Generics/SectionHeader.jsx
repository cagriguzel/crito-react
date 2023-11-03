import React from 'react'

const SectionHeader = ({type, title, description}) => {

  const getHeaderClassName = () => {
    switch(type) {
      case 'center' :
        return 'section-header-center'
      default:
        return 'section-header'
    }
}
  

  return (
    <div className={getHeaderClassName()}>
        <p className="section-tit">{title}</p>
        <h2>{description}</h2>
    </div>
  )
}

export default SectionHeader