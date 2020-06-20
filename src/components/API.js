import React, { Component } from 'react';

class API extends Component {

    render() {
        return (
            <div className="api-section container">
                <div className="first-card">
                    <div className="img-proCard">
                        <img src="/images/api/professionals.png" alt="Professionals" />
                    </div>
                    <div className="api-price">
                        <span>FREELANCER API</span>
                        <h4>43 million professionals on demand</h4>
                        <p>Why hire people when you can simply integrate our talented cloud workforce instead?</p>
                        <button>View Documentation</button>
                    </div>
                </div>
                <div className="second-card">
                    <div>
                        <span>FREELANCER ENTERPRISE</span>
                        <h4>Company budget? Get more done for less</h4>
                        <p>Use our workforce of 43 million to help your business achieve more.</p>
                        <button>Contact Us</button>
                    </div>
                    <div className="img-card">
                        <img src="/images/api/company.png" alt="Company" />
                    </div>
                </div>
            </div>
        );
    }
}

export default API;