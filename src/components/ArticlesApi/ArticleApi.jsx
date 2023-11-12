// ArticlesApi.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ArticlesApi.css';
import news2 from '../../assets/images/news2.jpg';

const formatDate = (dateString) => {
  const dateOptions = { day: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString('en-US', dateOptions);
};

const getFirstWords = (content, wordCount) => {
  const words = content.split(' ');
  return words.slice(0, wordCount).join(' ');
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
              <p className='news-text'>
                {getFirstWords(item.content, 5)}{' '}
                <span className='more'>{item.content.slice(5)}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ArticlesApi;


// ArticlesApi.jsx
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ArticlesApi.css'; // SCSS dosyasını ekleyin
// import news2 from '../../assets/images/news2.jpg';

// const formatDate = (dateString) => {
//   const dateOptions = { day: 'numeric', month: 'short' };
//   return new Date(dateString).toLocaleDateString('en-US', dateOptions);
// };

// const getFirstWords = (content, wordCount) => {
//   const words = content.split(' ');
//   return words.slice(0, wordCount).join(' ');
// };

// const ArticlesApi = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
//         if (response.ok) {
//           const jsonData = await response.json();
//           setData(jsonData);
//         } else {
//           console.error('Error fetching data:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className='articleBox container'>
//         {data.map((item, index) => (
//           <Link to={`/article/${item.id}`} key={index} className='card container'>
//             <div className='image-box'>
//               <img src={index === 2 ? news2 : item.imageUrl} alt='' />
//               <div className='blog-item'>
//                 <h4>{formatDate(item.published)}</h4>
//               </div>
//             </div>
//             <div className='news-details'>
//               <h4 className='news-header'>{item.category}</h4>
//               <h6 className='news-title'>{item.title}</h6>
//               <p className='news-text'>
//                 {getFirstWords(item.content, 5)}{' '}
//                 <span className='more'>{item.content.slice(5)}</span>
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ArticlesApi;




// ArticlesApi.jsx
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ArticlesApi.css'

// const ArticlesApi = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
//         if (response.ok) {
//           const jsonData = await response.json();
//           setData(jsonData);
//         } else {
//           console.error('Error fetching data:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='articleBox container'>
//       {data.map((item) => (
//         <Link to={`/news/${item.id}`} key={item.id} className='card container'>
//           <div className='image-box'>
//             <img src={item.imageUrl} alt='' />
//             <div className='blog-item'>
//               <h4>{item.published}</h4>
//             </div>
//           </div>
//           <div className='news-details'>
//             <h4 className='news-header'>{item.category}</h4>
//             <h6 className='news-title'>{item.title}</h6>
//             <p className='news-text'>{item.content}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ArticlesApi;







// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ArticlesApi.css';
// import news2 from '../../assets/images/news2.jpg';

// const formatDate = (dateString) => {
//   const dateOptions = { day: 'numeric', month: 'short' };
//   return new Date(dateString).toLocaleDateString('en-US', dateOptions);
// };

// const getFirstWords = (content, wordCount) => {
//   const words = content.split(' ');
//   return words.slice(0, wordCount).join(' ');
// };

// const ArticlesApi = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
//         if (response.ok) {
//           const jsonData = await response.json();
//           setData(jsonData);
//         } else {
//           console.error('Error fetching data:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className='articleBox container'>
//         {data.map((item, index) => (
//           <Link to={`/article/${item.id}`} key={index} className='card container'>
//             <div className='image-box'>
//               <img src={index === 2 ? news2 : item.imageUrl} alt='' />
//               <div className='blog-item'>
//                 <h4>{formatDate(item.published)}</h4>
//               </div>
//             </div>
//             <div className='news-details'>
//               <h4 className='news-header'>{item.category}</h4>
//               <h6 className='news-title'>{item.title}</h6>
//               <p className='news-text'>
//                 {getFirstWords(item.content, 5)}{' '}
//                 <span className='more'>{item.content.slice(5)}</span>
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ArticlesApi;
