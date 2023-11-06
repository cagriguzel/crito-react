import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';
import team5 from '../../assets/images/team5.jpg';
import team6 from '../../assets/images/team6.jpg';
import team7 from '../../assets/images/team7.jpg';
import team8 from '../../assets/images/team8.jpg';

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2400 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 2400, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const memberData = [
    {
      id: 1,
      imageurl: team1,
      name: "KRISTINE PALMER",
      title: "Chef Operatoion Officer",
      
    },
    {
      id: 2,
      imageurl: team2,
      name: "MARK AUBRI",
      title: "Senior Consultant",
      
    },
    {
      id: 3,
      imageurl: team3,
      name: "KIMBERLY HANSEN",
      title: "Senior Consultant",
      
    },
    {
      id: 4,
      imageurl: team5,
      name: "KRISTINE PALMER",
      title: "Chef Operatoion Officer",
      
    },
    {
      id: 5,
      imageurl: team6,
      name: "JASON PALMER",
      title: "Senior Developer",
      
    },
    {
      id: 6,
      imageurl: team7,
      name: "KURT HANNSON",
      title: "Operation TECH. ",
      
    },
    {
      id: 7,
      imageurl: team8,
      name: "CAGRI GUZEL",
      title: ".Net Developer",
      
    },
    {
      id: 8,
      imageurl: team8,
      name: "BRAD PITTSON",
      title: "JavaScript Developer",
      
    },
  ];