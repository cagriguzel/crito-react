import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetails.css'; 
import news2 from '../../assets/images/news2.jpg';
import Header from '../Header/Header';
import Showcase2 from '../Showcase2/Showcase2';
import ArticleNews from '../ArticleNewsHomePage/ArticleNews';
import Footer from '../Footer/Footer';
import SearchBar from '../Generics/SearchBar';

const formatDate = (dateString) => {
  const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', dateOptions);
};

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

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

    const fetchRecentPosts = async () => {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        if (response.ok) {
          const jsonData = await response.json();

          const formattedPosts = jsonData.slice(0, 4).map(post => {
            const formattedDate = formatDate(post.published);
            return { ...post, formattedDate };
          });
          setRecentPosts(formattedPosts);
        } else {
          console.error('Error fetching recent posts:', response.status);
        }
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };

    fetchArticle();
    fetchRecentPosts();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Showcase2 text='News & Articles' />
      <div className='article container'>
        <div className='article-left'>
          <h2>{article.title}</h2>
          <div className='article-details'>
            <ul className='blog-mta mb-30'>
              <li>{formatDate(article.published)}</li>
              <li>{article.author}</li>
              <li>{article.category}</li>
            </ul>
          </div>
          <img className='articleImg' src={article.imageUrl || news2} alt='' />
          <div className='content-section'>
            <h3 style={{ fontWeight: 'bold'}} className='article-content'>{article.content}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nihil ipsum consequatur nam distinctio unde aperiam ullam debitis libero atque veniam dicta, eligendi fugiat ducimus nostrum laborum deleniti perspiciatis animi in non nemo facere. Eum odio similique animi distinctio adipisci aliquam, itaque at dolor, recusandae dolores neque repellendus deleniti nulla?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nihil ipsum consequatur nam distinctio unde aperiam ullam debitis libero atque veniam dicta, eligendi fugiat ducimus nostrum laborum deleniti perspiciatis animi in non nemo facere. Eum odio similique animi distinctio adipisci aliquam, itaque at dolor, recusandae dolores neque repellendus deleniti nulla?</p>
          </div>
          <div className='blog-section'>
            <ul className="blog-ex-tag">
              <li>
                <a href="#">Digitalization</a>
              </li>
              <li>
                <a href="#">School</a>
              </li>
              <li>
                <a href="#">IT</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Tech</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='ArticleRight'>
          <SearchBar />
          <div className='Posts'>
            <h4>Recent Posts</h4>
            <ul>
              {recentPosts.map(post => (
                <li className='PostsList' key={post.id}>
                  {post.title}
                  <br />
                  <span>{post.formattedDate}</span>
                </li>
              ))}
            </ul>
          </div>
          <div class="Categories">
            <h4>Categories</h4>
            <li href="#">Technology  -  <span>20 Posts</span></li>
            <li href="#">Freelancing  -  <span>07 Posts</span></li>
            <li href="#">Writing  -  <span>16 Posts</span></li>
            <li href="#">Marketing  -  <span>11 Posts</span></li>
            <li href="#">Business  -  <span>35 Posts</span></li>
            <li href="#">Education  -  <span>14 Posts</span></li>
          </div>
        </div>
      </div>
      <ArticleNews />
      <Footer />
    </>
  );
};

export default ArticleDetails;






