import React from 'react';
import { Carousel } from 'react-bootstrap';

class MainCarousel extends React.Component{
  render (){
        return (
            <div className="main-carousel d-none d-md-block">
              <div className="main-carousel-caption">
                  <h1>Hire expert freelancers for any job, online</h1>
                  <p className="lead">Millions of small businesses use Freelancer to turn their ideas into reality.</p>
                  <button>I want Hire</button>
                  <button>I want Work</button>
              </div>
              <Carousel>
                <Carousel.Item>
                <img className="d-block w-100" src="/images/carousel/bg2.jpg" alt="First" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/images/carousel/bg1.jpg" alt="Second" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/images/carousel/bg2.jpg" alt="Third" />
                </Carousel.Item>

              </Carousel>
            </div>
      );
    }
}

export default MainCarousel;
