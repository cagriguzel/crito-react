import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ArticlesApi.css';
import news2 from '../../assets/images/news2.jpg';

const formatDate = (dateString) => {
  const dateOptions = { day: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString('en-US', dateOptions);
};

const ArticlesApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='articleBox container'>
        {data.map((item) => (
          <Link to={`/news/${item.id}`} key={item.id} className='card container'>
            <div className='image-box'>
              <img src={item.imageUrl || news2} alt='' />
              <div className='blog-item'>
                <h4>{formatDate(item.published)}</h4>
              </div>
            </div>
            <div className='news-details'>
              <h4 className='news-header'>{item.category}</h4>
              <h6 className='news-title'>{item.title}</h6>
              <p className='news-text'>{item.content.slice(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ArticlesApi;


