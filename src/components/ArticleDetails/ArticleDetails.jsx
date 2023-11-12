// ArticleDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const formatDate = (dateString) => {
  const dateOptions = { day: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString('en-US', dateOptions);
};

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
        if (response.ok) {
          const jsonData = await response.json();
          setArticle(jsonData);
        } else {
          console.error('Error fetching article:', response.status);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className='article-detail-container'>
      <div className='article-header'>
        <h2>{article.title}</h2>
        <p>Published on {formatDate(article.published)}</p>
      </div>
      <img src={article.imageUrl || news2} alt='' />
      <div className='article-content'>
        {article.content}
      </div>
    </div>
  );
};

export default ArticleDetails;



// ArticleDetails.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const formatDate = (dateString) => {
//   const dateOptions = { day: 'numeric', month: 'short' };
//   return new Date(dateString).toLocaleDateString('en-US', dateOptions);
// };

// const getFirstWords = (content, wordCount) => {
//   const words = content.split(' ');
//   return words.slice(0, wordCount).join(' ');
// };

// const ArticleDetails = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
//         if (response.ok) {
//           const jsonData = await response.json();
//           setArticle(jsonData);
//         } else {
//           console.error('Error fetching article:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching article:', error);
//       }
//     };

//     fetchArticle();
//   }, [id]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='article-detail-container'>
//       <div className='article-header'>
//         <h2>{article.title}</h2>
//         <p>Published on {formatDate(article.published)}</p>
//       </div>
//       <img src={article.imageUrl} alt='' />
//       <div className='article-content'>
//         {article.content}
//       </div>
//     </div>
//   );
// };

// export default ArticleDetails;






// ArticleDetails.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ArticleDetails = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
//         if (response.ok) {
//           const jsonData = await response.json();
//           setArticle(jsonData);
//         } else {
//           console.error('Error fetching article:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching article:', error);
//       }
//     };

//     fetchArticle();
//   }, [id]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='article-detail-container'>
//       <div className='article-header'>
//         <h2>{article.title}</h2>
//         <p>Published on {article.published}</p>
//       </div>
//       <img src={article.imageUrl} alt='' />
//       <div className='article-content'>
//         {article.content}
//       </div>
//     </div>
//   );
// };

// export default ArticleDetails;
