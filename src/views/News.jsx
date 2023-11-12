import React from 'react'
import Header from '../components/Header/Header'

import Newsletter from '../components/Newsletter/Newsletter'
import ArticlesApi from '../components/ArticlesApi/ArticleApi'
import Showcase2 from '../components/Showcase2/Showcase2'
import Footer from '../components/Footer/Footer'



const News = () => {
  return (
    <>
     <Header/>
     <Showcase2 text={"News & Articles"}/>

     <ArticlesApi/>
     <Newsletter/>
     <Footer/>
    
    </>
  )
}

export default News


