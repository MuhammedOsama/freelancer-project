import React, { Component } from 'react';

class API extends Component {
    render() {
        return (
            <div className="api">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cards_section">
                                <div className="pic">
                                    <img src="/images/api/professionals.png" alt="Professionals"/>
                                </div>
                                <div className="freelancer">
                                    <span>FREELANCER API</span>
                                    <h3>43 million professionals on demand</h3>
                                    <p>Why hire people when you can simply integrate our talented cloud workforce instead?</p>
                                    <button>View Documentation</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cards_section">
                                <div className="pic">
                                    <img src="/images/api/company.png" alt="Company"/>
                                </div>
                                <div className="freelancer">
                                    <span>FREELANCER ENTERPRISE</span>
                                    <h3>43 million professionals on demand</h3>
                                    <p>Use our workforce of 43 million to help your business achieve more.</p>
                                    <button>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default API;