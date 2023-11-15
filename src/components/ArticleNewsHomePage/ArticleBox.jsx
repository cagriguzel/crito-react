

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './ArticleBox.css';
import news2 from '../../assets/images/news2.jpg'
import { Pagination } from 'swiper/modules';

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    // Replace the sample API URL with your own
    fetch('https://win23-assignment.azurewebsites.net/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to format the date from the API to show only day and month
  const formatDate = (dateString) => {
    const dateOptions = { day: 'numeric', month: 'short' };
    const [day, month] = new Date(dateString).toLocaleDateString('en-US', dateOptions).split(' ');
    return `${month} ${day}`;
  };

  // Define custom images for specific indices
  const customImages = {
    2: news2,
    // Add entries for other indices as needed
  };

  // If there is a custom image specified for an index, use it; otherwise, use the image from the API
  const getImagePath = (index) => customImages[index] || articles[index]?.imageUrl || '';

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
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
                <img src={getImagePath(index)} alt="" />
                <div className="blog-date-item">
                  <h4>{formatDate(article.published)}</h4>
                </div>
              </div>
              <div className="news-details">
                <h4 className="news-header">{article.category}</h4>
                <h6 className="news-title">{article.title}</h6>
                <p className="news-text">{article.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


