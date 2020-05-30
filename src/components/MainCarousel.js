import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class MainCarousel extends Component{
  render (){
        return (
            <div className="main-carousel d-none d-md-block">
              <div className="main-carousel-caption">
                  <h1>Hire expert freelancers for any job, online</h1>
                  <p className="lead">Millions of small businesses use Freelancer to turn their ideas into reality...</p>
                  <button>I want Hire</button>
                  <button>I want Work</button>
              </div>
              <Carousel>
                <Carousel.Item>
                <img className="d-block w-100" src="/images/carousel/bg1.jpg" alt="First" />
                <Carousel.Caption>
                  <span>This Mobile Design Cost </span>
                  <label>$150</label>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/images/carousel/bg2.jpg" alt="Second" />
                <Carousel.Caption className="carousel-caption">
                  <span>This Architectural Design Cost </span>
                  <label>$200</label>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/images/carousel/bg3.jpg" alt="Third" />
                <Carousel.Caption>
                  <span>This Nasa Design Cost </span>
                  <label>$250</label>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/images/carousel/bg4.jpg" alt="Fourth" />
                <Carousel.Caption>
                  <span>This Website Design Cost </span>
                  <label>$300</label>
                </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
      );
    }
}

export default MainCarousel;

