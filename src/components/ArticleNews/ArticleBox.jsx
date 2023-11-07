import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './ArticleBox.css';
import { Pagination } from 'swiper/modules';
import article1 from '../../assets/images/article-image-1.jpg'
import article2 from '../../assets/images/article-image-2.jpg'
import article3 from '../../assets/images/article-image-3.jpg'
import article4 from '../../assets/images/article-image-4.jpg'

export default function App() {

    const articles = [
        {
          date: 'Aug 28',
          category: 'Business',
          title: 'How to Use Digitalization In The Classroom',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aut voluptate facere accusantium vel minus.',
          image: article1,
        },
        {
          date: 'Mar 17',
          category: 'Business',
          title: 'How to Implement Chat GPT In Your Projects',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aut voluptate facere accusantium vel minus.',
          image: article1,
        },
        {
          date: 'Mar 13',
          category: 'Business',
          title: 'The Guide to Support Modern CSS Design',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aut voluptate facere accusantium vel minus.',
          image: article2,
        },
        {
          date: 'Maj 21',
          category: 'Business',
          title: 'Google Bards Features',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aut voluptate facere accusantium vel minus.',
          image: article3,
        },
        {
          date: 'Sep 11',
          category: 'Business',
          title: 'Amazon and Microsoft to Face Cloud Computing Competition Probe',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aut voluptate facere accusantium vel minus.',
          image: article4,
        },
      ];
    


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            // Belirli genişlik aralıkları için özel ayarlar
            100: {
                slidesPerView: 1,
              },
            768: {
                slidesPerView: 2,
              },
            992: {
                slidesPerView: 3,
              },

          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {articles.map((article, index) => (
        <SwiperSlide key={index}>
            <div className="card swiper-slide">
                <div className="image-box">
                    <img src={article.image} alt="" />
                    <div className="blog-date-item">
                        <h4>{article.date}</h4>
                        {/* <p className="date">Aug</p> */}
                    </div>
                </div>
                <div className="news-details">
                    <h4 className="news-header">{article.category}</h4>
                    <h6 className="news-title">{article.title}</h6>
                    <p className="news-text">{article.text}</p> 
                </div>
            </div>
        </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}

