import React from 'react'
import SectionHeader from '../Generics/SectionHeader'
import Button from '../Generics/Button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { memberData, responsive } from "./data";
import './Team.css';
import TeamBox from './TeamBox';


// export default function App() {
//   const member = memberData.map((item) => (
//     <TeamBox
//       name={item.name}
//       url={item.imageurl}
//       title={item.title}
//     />
//   ));

const Team = () => {

  const member = memberData.map((item) => (
    <TeamBox
      name={item.name}
      url={item.imageurl}
      title={item.title}
    />
  ));



  return (
    <>
    <section className='ourTeam'>
      <div className='container'>
        <div className='header'>
          <SectionHeader title="Meet Our Team" description='Experience Team Members' /> 
        </div>
        <div className='custom-button'>
          <Button className="custom-button" type='yellow-black' text='Browse Team' url='/team.html' />  
        </div>
      </div>
      <div className="App container">
            <Carousel showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
            {member}
            </Carousel>
      </div>

    </section>
    </>
  )
}
export default Team;