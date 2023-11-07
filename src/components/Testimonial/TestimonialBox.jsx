import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from '../Generics/Button';
import person1 from '../../assets/images/person_1_sm.jpg';
import person2 from '../../assets/images/person_2_sm.jpg';
import person3 from '../../assets/images/person_3_sm.jpg';


const TestimonialBox = () => {
  const items = [
    {
      name: 'Alex Fought',
      title: 'Business Manager, Dorfus',
      imageSrc: person1,
      starsColor: '#c1e953',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem iusto officia! Quis tenetur maxime, laboriosam saepe, voluptate necessitatibus tempora!',
    },
    {
      name: 'Amanda Tulling',
      title: 'Senior Developer, Square',
      imageSrc: person2,
      starsColor: '#c1e953',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem iusto officia! Quis tenetur maxime, laboriosam saepe, voluptate necessitatibus tempora!',
    },
    {
      name: 'Jack McDogglas',
      title: 'Key Account Manager, Gobona',
      imageSrc: person3,
      starsColor: '#c1e953',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem iusto officia! Quis tenetur maxime, laboriosam saepe, voluptate necessitatibus tempora!',
    },
    {
        name: 'Stefan Meier',
        title: 'Key Account Manager, Gobona',
        imageSrc: person1,
        starsColor: '#c1e953',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem iusto officia! Quis tenetur maxime, laboriosam saepe, voluptate necessitatibus tempora!',
      },
  ];

  const options = {
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
  
  return (
    
    <div className="site-section bg-left-half">
      <div className="container owl-2-style">
        <OwlCarousel className="owl-carousel owl-2" {...options}>
          {items.map((item, index) => (
            <div className="media-29101" key={index}>
              <div className="stars">
                <i className="fa-sharp fa-solid fa-star" style={{ color: item.starsColor }}></i>
                <i className="fa-sharp fa-solid fa-star" style={{ color: item.starsColor }}></i>
                <i className="fa-sharp fa-solid fa-star" style={{ color: item.starsColor }}></i>
                <i className="fa-sharp fa-solid fa-star" style={{ color: item.starsColor }}></i>
                <i className="fa-sharp fa-solid fa-star" style={{ color: item.starsColor }}></i>
              </div>
              <p>{item.review}</p>
              <div className="client">
                <img src={item.imageSrc} alt="Image" className="img-fluid" />
                <div className="title">
                  <h3>{item.name}</h3>
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        <div className="center-content">
            <Button className="button" type='black' text='All Reviews' url='/reviews.html'/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
