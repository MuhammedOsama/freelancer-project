import React, { Component } from 'react';

class FooterSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {link: "/images/footer/freelancer-logo-light.svg", alter: "LogoLight"},
            ],
            details: [
                {icon: "fas fa-archway", title: "US (International) / English"},
                {icon: "fas fa-question-circle", title: "Help & Support"}
            ],
            object: [
                {head: "Freelancer"},
                {referTo: "Categories"},
                {referTo: "Projects"},
                {referTo: "Contests"},
                {referTo: "Freelancers"},
                {referTo: "Enterprise"},
                {referTo: "Preferred Freelancer Program"},
                {referTo: "Project Management"},
                {referTo: "Local Jobs"},
                {referTo: "Showcase"},
                {referTo: "API For Developers"},
                {referTo: "Get Verified"},
            ],
            about: [
                {head: "About Us"},
                {referTo: "About Us"},
                {referTo: "How it works"},
                {referTo: "Security"},
                {referTo: "Investor"},
                {referTo: "Sitemap"},
                {referTo: "Quotes"},
                {referTo: "News"}
            ],
            term:  [
                {head: "Terms"},
                {referTo: "Privacy Policy"},
                {referTo: "Term and Conditions"},
                {referTo: "Copyright Policy"},
                {referTo: "Code of Conduct"},
                {referTo: "Fees and Charges"}
            ],
            app: [
                {head: "Apps"},
                {link: "/images/footer/app-store.svg", alter: "AppStore"},
                {link: "/images/footer/google-play.svg", alter: "GooglePlay"}
            ],
            font: [
                {icon: "fab fa-facebook"},
                {icon: "fab fa-twitter"},
                {icon: "fab fa-youtube"},
                {icon: "fab fa-instagram"}
            ],
            desc: [
                {head: "44,862,749"},
            ],
            regis: [
                {label: "Registered Users"}
            ],
            total: [
                {label: "Total Jobs Posted"}
            ],
            paragraph: [
                {p: "Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 141 959 042) Copyright © 2020 Freelancer Technology Pty Limited (ACN 141 959 042)"}
            ]
        }
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            {this.state.items.map((item, id) => {
                                return (
                                    <div key={id}>
                                        <img src={item.link} alt={item.alter}/>
                                    </div> 
                                )
                            })}
                            {this.state.details.map((item, id) => {
                                return (
                                    <div key={id}>
                                        <div className="support">
                                            <a href="/"><i className={item.icon}></i>{item.title}</a>
                                        </div>
                                    </div> 
                                )
                            })}
                            
                            
                        </div>

                        <div className="col-lg-2 col-md-3">
                            {this.state.object.map((obj, id) => {
                                return (
                                    <div key={id}>
                                        <span>{obj.head}</span>
                                        <div className="links">
                                            <a href="/">{obj.referTo}</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="col-lg-2 col-md-3">
                            {this.state.about.map((obj, id) => {
                                return (
                                    <div key={id}>
                                        <span>{obj.head}</span>
                                        <div className="links">
                                            <a href="/">{obj.referTo}</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="col-lg-2 col-md-3">
                            {this.state.term.map((obj, id) => {
                                return (
                                    <div key={id}>
                                        <span>{obj.head}</span>
                                        <div className="links">
                                            <a href="/">{obj.referTo}</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="col-lg-2 col-md-3">
                        
                        <div id="apps_block">
                            <span>Apps</span>
                            <div className="apps">
                                {this.state.app.map((item, id) => {
                                    return (
                                        <div key={id} className="app">
                                            <img src={item.link} alt={item.alter} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                            <div className="icons">
                                {this.state.font.map((item, id) => {
                                    return (
                                        <div key={id}>
                                            <i className={item.icon}></i>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                            
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            {this.state.desc.map((item, id) => {
                                return (
                                    <div key={id} className="footer-desc">
                                        <h6>{item.head}</h6>
                                    </div>)
                            })}
                            {this.state.regis.map((item, id) => {
                                return (
                                    <div key={id} className="footer-desc">
                                        <label>{item.label}</label>
                                    </div>)
                            })}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {this.state.desc.map((item, id) => {
                                return (
                                    <div key={id} className="footer-desc">
                                        <h6>{item.head}</h6>
                                    </div>)
                            })}
                            {this.state.total.map((item, id) => {
                                return (
                                    <div key={id} className="footer-desc">
                                        <label>{item.label}</label>
                                    </div>)
                            })}
                        </div>
                        <div className="col-lg-6 col-md-6">
                            {this.state.paragraph.map((item, id) => {
                                return (
                                    <div key={id} className="footer-desc">
                                        <p>{item.p}</p>
                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterSection;