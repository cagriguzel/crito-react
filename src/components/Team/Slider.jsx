import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';
import team5 from '../../assets/images/team5.jpg';
import team6 from '../../assets/images/team6.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 2
  }
};

const TeamSlider = [
  {
    url: team1,
    name: "KRISTINE PALMER",
    title: "Chef Operation Officer",
  },
  {
    url: team2,
    name: "MARK AUBRI",
    title: "Senior Consultant",
  },
  {
    url: team3,
    name: "KIMBERLY HANSEN",
    title: "Senior Consultant",
  },
  {
    url: team5,
    name: "KRISTINE PALMER",
    title: "Chef Operation Officer",
  },
  {
    url: team6,
    name: "JASON PALMER",
    title: "Senior Developer",
  }
];

const Slider = () => {
  return (
    <div className="parent">
        <div className="container">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {TeamSlider.map((teamMember, index) => (
            
                <div className="slider" key={index}>
                        <img src={teamMember.url} alt={teamMember.name} />
                        <h3 className="name">{teamMember.name}</h3>
                        <span className="title">{teamMember.title}</span>
                </div>
                
                ))}
            </Carousel>
        </div>
    </div>
  );
};

export default Slider;
