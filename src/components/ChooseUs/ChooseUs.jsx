import React from 'react';
import SectionHeader from '../Generics/SectionHeader';
import ChooseBox from './ChooseBox';
import WhyImage from '../../assets/images/why-choose.jpg'

const ChooseUs = () => {
  return (
    <div>
      <section className="choose-us">
        <div className="container">
          <div className="choose-left">
            <SectionHeader title="Why Choose Us" description="Why We Are the Best Business Consulting Agency" />
            <ul>
              <ChooseBox icon="fa-light fa-thumbs-up" title="Process Excellence" description=" Lorem ipsum dolor sit amet consectetur."/>
              <ChooseBox icon="fa-thin fa-bullseye-arrow" title="Strategic Planning" description="Lorem ipsum dolor sit amet consectetur."/>
              <ChooseBox icon="fa-sharp fa-light fa-pen-nib" title="Experience Design" description="Lorem ipsum dolor sit amet consectetur."/>
              <ChooseBox icon="fa-thin fa-brain-circuit" title="Artificial Intelligence" description="Lorem ipsum dolor sit amet consectetur."/>
            </ul>
          </div>
          <div className="choose-right">
            <img className="why-image" src={WhyImage} alt="" />
          </div>
        </div>
        <div className="background"></div>
      </section>
    </div>
  );
}

export default ChooseUs;
