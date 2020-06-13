import React, { Component } from 'react';

class API extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {link: "/images/api/professionals.png", alter: "Professionals", span: "FREELANCER API", header: "43 million professionals on demand", paragraph: "Why hire people when you can simply integrate our talented cloud workforce instead?", button: "View Documentation"},
                {link: "/images/api/company.png", alter: "Company", span: "FREELANCER ENTERPRISE", header: "Company budget? Get more done for less", paragraph: "Use our workforce of 43 million to help your business achieve more.", button: "Contact Us"}
            ]
        }
    }

    render() {
        return (
            <div className="api-section">
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, id) => {
                            return(
                                <div key={id} className="col">
                                    <img src={item.link} alt={item.alter} />
                                    <div className="api-price">
                                        <span>{item.span}</span>
                                        <h3>{item.header}</h3>
                                        <p>{item.paragraph}</p>
                                        <button>{item.button}</button>
                                    </div>
                                </div>,
                                <div key={id} className="col">    
                                    <div className="enter-price">
                                        <span>{item.span}</span>
                                        <h3>{item.header}</h3>
                                        <p>{item.paragraph}</p>
                                        <button>{item.button}</button>
                                    </div>
                                    <img src={item.link} alt={item.alter} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default API;