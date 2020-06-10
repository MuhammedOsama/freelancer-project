import React, { Component } from 'react';

class FooterSection extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/images/footer/freelancer-logo-light.svg" alt="LogoLight"/>
                            <div className="support">
                                <a href="#"><i className="fas fa-archway"></i>US (International) / English</a>
                                <a href="#"><i className="fas fa-question-circle"></i>Help & Support</a>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <span>Freelancer</span>
                            <div className="links">
                                <a href="#">Categories</a>
                                <a href="#">Projects</a>
                                <a href="#">Contests</a>
                                <a href="#">Freelancers</a>
                                <a href="#">Enterprise</a>
                                <a href="#">Preferred Freelancer Program</a>
                                <a href="#">Project Management</a>
                                <a href="#">Local Jobs</a>
                                <a href="#">Showcase</a>
                                <a href="#">API For Developers</a>
                                <a href="#">Get Verified</a>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <span>About</span>
                            <div className="links">
                                <a href="#">About Us</a>
                                <a href="#">How it Works</a>
                                <a href="#">Security</a>
                                <a href="#">Investor</a>
                                <a href="#">Sitemap</a>
                                <a href="#">Quotes</a>
                                <a href="#">News</a>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <span>Terms</span>
                            <div className="links">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms and Conditions</a>
                                <a href="#">Copyright Policy</a>
                                <a href="#">Code of Conduct</a>
                                <a href="#">Fees and Charges</a>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <span>Apps</span>
                            <div className="app">
                                <img src="/images/footer/app-store.svg" alt="AppStore"/>
                                <img src="/images/footer/google-play.svg" alt="GooglePlay"/>
                            </div>
                            <div className="font-awe">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-desc">
                                <h6>44,862,749</h6>
                                <label>Registered Users</label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-desc">
                                <h6>17,963,596</h6>
                                <label>Total Jobs Posted</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-desc">
                                <p>Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 141 959 042) Copyright © 2020 Freelancer Technology Pty Limited (ACN 141 959 042).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterSection;