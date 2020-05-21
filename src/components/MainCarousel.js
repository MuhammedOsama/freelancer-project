import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class MainCarousel extends Component {
    render() {
        return(
            <div>
                <Carousel className="expert">
                    <Carousel.Item className="bg-cover">
                        <img src="/images/carousel/mobile.jpg" alt="Mobile"/>
                        <Carousel.Caption>
                            <h1 className="caption_title">Hire expert freelancers for any job, online</h1>
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
                        <img src="/images/carousel/architectural.jpg" alt="Architectural"/>
                        <Carousel.Caption>
                            <h1 className="caption_title">Hire expert freelancers for any job, online</h1>
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
                        <img src="/images/carousel/nasa.jpg" alt="Nasa"/>
                        <Carousel.Caption>
                            <h1 className="caption_title">Hire expert freelancers for any job, online</h1>
                            <p>Millions of small businesses use Freelancer to turn their ideas into reality..</p>
                            <button className="hire" value="submit">I want to Hire</button>
                            <button className="work" value="submit">I want to Work</button>
                            <div className="price">
                                <span>This Nasa Design Cost </span>
                                <label>$250</label>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="bg-cover">
                        <img src="/images/carousel/website.jpg" alt="Website"/>
                        <Carousel.Caption>
                            <h1 className="caption_title">Hire expert freelancers for any job, online</h1>
                            <p>Millions of small businesses use Freelancer to turn their ideas into reality..</p>
                            <button value="submit">I want to Hire</button>
                            <button value="submit">I want to Work</button>
                            <div className="price">
                                <span>This Website Design Cost </span>
                                <label>$300</label>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default MainCarousel;