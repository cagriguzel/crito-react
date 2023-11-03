import React, { Component } from "react";
import "./TeamBox.css";
import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';
import team5 from '../../assets/images/team5.jpg';

class Panel extends Component {
  state = {
    show: false
  };
  clickHandler = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <div>
        <section className="cards">
          <article className="card">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlCo7GdsUiBMHGAM1y0lOzB5sZ4Pj7-yE35rEC0r8IY6Gj2cpiGPdzWU6vhw&usqp=CAE"
              alt="products"
            />
            <p className="card-title">
              Tommy Hilfiger Watches - Multifunctional Watch Dressed Up 1710383
              Black
            </p>
            <span className="card-price">$34.00(INR 2448)</span>
            <span className="card-price special">$34.00(INR 2448)</span>
          </article>
        </section>
      </div>
    );
  }
}
export default Panel;
