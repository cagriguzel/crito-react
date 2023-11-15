import React from 'react';

const ProjectBox = ({ title, image, url }) => {
  return (
    <div className="project" href={url}>
      <img className="pic" src={image} alt="A man's hands reading a business paper" />
      <h3>{title}</h3>
      <div className="readmore">
        <a href={url} style={{ textDecoration: 'none', color: 'inherit' }}>Read More</a> <i className="fa-light fa-arrow-up-right"></i>
      </div>
    </div>
  );
}

export default ProjectBox;
