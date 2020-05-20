import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselSection extends Component {
    render() {
        return(
            <div className="expert">
                <Carousel>
                    <Carousel.Item className="bg-cover">
                        <img src="/images/carousel/mobile.jpg" alt=""/>
                        <Carousel.Caption>
                            <h1>Hire expert freelancers for any job, online</h1>
                            <p>Millions of small businesses use Freelancer to turn their ideas into reality..</p>
                            <button className="hire" value="submit">I want to Hire</button>
                            <button className="work" value="submit">I want to Work</button>
                            <div className="price">
                                <span>This Mobile App Design Cost </span>
                                <label>$150</label>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="bg-cover">
                        <img src="/images/carousel/architectural.jpg" alt=""/>
                        <Carousel.Caption>
                            <h1>Hire expert freelancers for any job, online</h1>
                            <p>Millions of small businesses use Freelancer to turn their ideas into reality..</p>
                            <button className="hire" value="submit">I want to Hire</button>
                            <button className="work" value="submit">I want to Work</button>
                            <div className="price">
                                <span>This Architectural Design Cost </span>
                                <label>$200</label>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="bg-cover">
                        <img src="/images/carousel/nasa.jpg" alt=""/>
                        <Carousel.Caption>
                            <h1>Hire expert freelancers for any job, online</h1>
                            <p>Millions of small businesses use Freelancer to turn their ideas into reality..</p>
                            <button className="hire" value="submit">I want to Hire</button>
                            <button className="work" value="submit">I want to Work</button>
                            <div className="price">
                                <span>This Nasa Design Cost </span>
                                <label>$50</label>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="bg-cover">
                        <img src="/images/carousel/website.jpg" alt=""/>
                        <Carousel.Caption>
                            <h1>Hire expert freelancers for any job, online</h1>
                            <p>Millions of small businesses use Freelancer to turn their ideas into reality..</p>
                            <button className="hire" value="submit">I want to Hire</button>
                            <button className="work" value="submit">I want to Work</button>
                            <div className="price">
                                <span>This Website Design Cost </span>
                                <label>$390</label>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselSection;