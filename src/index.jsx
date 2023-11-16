import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import News from './views/News'
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import './index.css';








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<ArticleDetails/>} />
    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
