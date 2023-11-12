import React from 'react'
import Button from '../Generics/Button'
import SectionHeader from '../Generics/SectionHeader'
import './ArticleHeader.css'

const ArticleHeader = () => {
  return (
    <div>
        <div className="container articleHeader">
            <div className="header">
            <SectionHeader title="Article & News" description="Get Every Single Article & News" />
            </div>
            <div className="customButton">
            <Button className="button" type="transparent" text="Browse Articles" url="/articles.html" />
            </div>
        </div>
    </div>
  )
}

export default ArticleHeader