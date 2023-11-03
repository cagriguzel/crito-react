import React from 'react';
import Button from '../Generics/Button';
import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';
import team5 from '../../assets/images/team5.jpg';


const Team = () => {
  const teamMembers = [
    { name: "Kristine Palmer", position: "Chef Operation Officer", image: team1 },
    { name: "Mark Aubri", position: "Senior Consultant", image: team2 },
    { name: "Kimberly Hansen", position: "Senior Consultant", image: team3 },
    { name: "Justin Willoman", position: "Senior Tech Consultant", image: team5 },
  ];

  return (
    <>
      <section className="our-team-header">
        <div className="container">
          <p>Meet Our Team</p>
          <div className="text">
            <h2>Experience Team Members</h2>
            <Button type="yellow" url="/teams.html"  text="Browse Team"/>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="members-box col-md-3 col-sm-6" key={index}>
                <div className="our-team">
                  <div className="pic">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="title">{member.name}</h3>
                  <span className="post">{member.position}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="circle">
            <i className="fa-duotone fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-duotone fa-circle"></i>
            <i className="fa-duotone fa-circle"></i>
            <i className="fa-duotone fa-circle"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
