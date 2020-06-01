import React, { Component } from 'react';

class Favorite extends Component {
    render () {
        return (
            <div className="favorite">
                <h2>Crowd favorites<br/>Here are some of our most popular projects:</h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="crowd-box">
                                <img src="/images/crowd/website.png" alt="Website"/>
                                <div className="price-box">
                                    <h5>Website Development</h5>
                                    <span>From $300 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="crowd-box">
                                <img src="/images/crowd/graphic.png" alt="Graphic"/>
                                <div className="price-box">
                                    <h5>Graphic Design</h5>
                                    <span>From $100 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="crowd-box">
                                <img src="/images/crowd/design.png" alt="Design"/>
                                <div className="price-box">
                                    <h5>Logo Design</h5>
                                    <span>From $50 USD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="crowd-box">
                                <img src="/images/crowd/marketing.png" alt="Marketing"/>
                                <div className="price-box">
                                    <h5>Marketing</h5>
                                    <span>From $150 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="crowd-box">
                                <img src="/images/crowd/writing.png" alt="Writing"/>
                                <div className="price-box">
                                    <h5>Writing</h5>
                                    <span>From $50 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="crowd-box">
                                <img src="/images/crowd/mobile.png" alt="Mobile"/>
                                <div className="price-box">
                                    <h5>Mobile App</h5>
                                    <span>From $50 USD / hour</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favorite;