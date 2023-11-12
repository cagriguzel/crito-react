import React from 'react'
import ArticleHeader from './ArticleHeader'
import ArticleBox from './ArticleBox'

const ArticleNews = () => {
  return (
    <>
        <ArticleHeader/>
        <div className='container'>
             <ArticleBox/>
        </div>
       
    </>
  )
}

export default ArticleNews