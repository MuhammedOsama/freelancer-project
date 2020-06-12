import React, { Component } from 'react';

class NeedWorkDone extends Component {

    constructor(porps) {
        super(porps);
        this.state = {
            items: [
                {image: "/images/work/job.svg", title: "Post a job", description: "Post a job", paragraph: "It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes."},
                {image: "/images/work/freelancer.svg", title: "Choose freelancers", description: "Choose freelancers", paragraph: "Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more)."},
                {image: "/images/work/safely.svg", title: "Pay safely", description: "Pay safely", paragraph: "With secure payments and thousands of reviewed professionals to choose from, Freelancer.com is the simplest and safest way to get work done online"}
            ]
        }
    }

    render () {
        return (
            <div className="work-done text-center">
                <h2>Need work done?</h2>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, id) => {
                            return (
                                <div key={id} className="col">
                                    <img src={item.image} alt={item.description} />
                                    <h3>{item.title}</h3>
                                    <p>{item.paragraph}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default NeedWorkDone;