import React from 'react'
import paperz from '../assets/images/paperz.svg'
import dorfus from '../assets/images/dorfus.svg'
import martino from '../assets/images/martino.svg'
import square from '../assets/images/square.svg'
import gobona from '../assets/images/gobona.svg'

const Partners = () => {
  return (
    <>
    <section class="partners">
        <div class="container">
            <img src={paperz} alt="paperz logo"/>
            <img src={dorfus} alt="dorfus logo"/>
            <img src={martino} alt="martino logo"/>
            <img src={square} alt="square logo"/>
            <img src={gobona} alt="gobona logo"/>
        </div>
    </section>
</>
  )
}

export default Partners