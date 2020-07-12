import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchMainCarousel } from "../actions/actions";

class MainCarousel extends Component{

  componentDidMount() {
      this.props.fetchMainCarousel();
  }

  render (){
      return (
      <div className="main-carousel d-none d-md-block">
        <div className="main-carousel-caption container">
          <h1>Hire expert freelancers for any job, online</h1>
          <p className="lead">Millions of small businesses use Freelancer to turn their ideas into reality...</p>
          <button>I want Hire</button>
          <button>I want Work</button>
        </div>
        <Carousel fade="true">
          {this.props.items.map((image) => {
            return (
              <Carousel.Item key={image.id}>
                <img className="d-block w-100" src={image.image} alt={image.details} />
                <Carousel.Caption className="carousel-caption container">
                  <span>{image.details}</span>
                  <span>{image.label}</span>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.carousel);
  return {
    items: state.carousel
  }
}

export default connect(mapStateToProps, {fetchMainCarousel})(MainCarousel);