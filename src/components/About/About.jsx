import React, { useState } from 'react';
import Button from '../Generics/Button';
import Founder from '../../assets/images/founder.jpg';
import SectionHeader from '../Generics/SectionHeader';

const About = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const showVideo = () => {
    setIsVideoVisible(true);
  };

  const hideVideo = () => {
    setIsVideoVisible(false);
  };

  return (
    <>
      <section className="about">
        <div className="container">
          <div className="company-left">
            <img className="founder-image" src={Founder} alt="Founder Image" />
            <div className="founder-box">
              <h6>Samantha Brown</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, suscipit.
              </p>
            </div>
          </div>
          <div className="company-right">
            <SectionHeader title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
            <p className="box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde maxime necessitatibus
              excepturi, dolorem suscipit voluptatum quisquam corporis expedita animi ducimus eligendi vitae
              iure veritatis tempora temporibus sapiente esse soluta! Et itaque alias blanditiis quasi?
              <br /><br />
              Eum, aspernatur recusandae? Delectus voluptas laudantium vero! Quisquam ipsam autem cupiditate
              voluptates vitae deserunt perspiciatis.
            </p>
            <span className="about-end">
              <Button text="Learn More" url="/about" />
              <div className="button" onClick={showVideo}>
                <i className="fa-sharp fa-light fa-circle-play"></i>
                <h6>Intro Video</h6>
              </div>
            </span>
          </div>
        </div>
      </section>

      {isVideoVisible && (
        <div className="video-overlay">
          <div className="video-container" style={{ width: '70vw' }}>
            <button className="close-button" onClick={hideVideo}>X</button>
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/wDjeBNv6ip0"
              title="Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default About;






// import React from 'react'
// import Button from '../Generics/Button'
// import Founder from '../../assets/images/founder.jpg'
// import SectionTitle from '../Generics/SectionHeader'
// import SectionHeader from '../Generics/SectionHeader'

// const About = () => {
//   return (
//     <>
//       <section className="about">
//         <div className="container">
//           <div className="company-left">
//             <img className="founder-image" src={Founder} alt="Founder Image" />
//             <div className="founder-box">
//               <h6>Samantha Brown</h6>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. At, suscipit.
//               </p>
//             </div>
//           </div>
//           <div className="company-right">
//             <SectionHeader title="About Company" description="We Are Business Consulting & Credit Repair Experts"/>
            // <p className="box-text">
            //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde maxime necessitatibus
            //   excepturi, dolorem suscipit voluptatum quisquam corporis expedita animi ducimus eligendi vitae
            //   iure veritatis tempora temporibus sapiente esse soluta! Et itaque alias blanditiis quasi?
            //   <br /><br />
            //   Eum, aspernatur recusandae? Delectus voluptas laudantium vero! Quisquam ipsam autem cupiditate
            //   voluptates vitae deserunt perspiciatis.
            // </p>
//             <span className="about-end">
//               <Button text="Learn More" url="/about"/>
//               <div className="button">
//                 <i className="fa-sharp fa-light fa-circle-play"></i>
//                 <h6>Intro Video</h6>
//               </div>
//             </span>
//           </div>
//         </div>
//       </section>

//     </>
//   )
// }

// export default About