import React from 'react';
import ProjectBox from './ProjectBox';
import Button from '../Generics/Button';
import Article1 from '../../assets/images/article-image-1.jpg';
import Article2 from '../../assets/images/article-image-2.jpg';
import Article3 from '../../assets/images/article-image-3.jpg';
import Article4 from '../../assets/images/article-image-4.jpg';
import SectionHeader from '../Generics/SectionHeader';

const ProjectCase = () => {
  return (
    <>
    <section className="project-and-case">
      <div className="container">
        <SectionHeader type="center" title="Project & Case Studies" description="Let's Looks Our Global Projects" />
        <div className="project-and-cases">
          <ProjectBox title="Grow your business" image={Article1} url="/projects.html/1"/>
          <ProjectBox title="Why your client needs a responsive website" image={Article2} url="/projects.html/2"/>
          <ProjectBox title="Educate your employees to get better results" image={Article3} url="/projects.html/3"/>
          <ProjectBox title="Business Insights is an important piece of your business" image={Article4} url="/projects.html/4"/>
        </div>
        <div className="center-content">
        <Button type="black" url="/projects" text="All Recent Projects"/>
        </div>
      </div>
    </section>
    </>
  );
}

export default ProjectCase;
