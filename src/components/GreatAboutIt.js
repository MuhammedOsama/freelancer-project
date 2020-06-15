import React, { Component } from 'react';

class GreatAboutIt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {link: "/images/about/browse.svg", title: "Browse portfolios", description: "Find professionals you can trust by browsing their samples of previous work and reading their profile reviews."},
                {link: "/images/about/view.svg", title: "View bids", description: "Receive free bids from our talented freelancers within seconds."},
                {link: "/images/about/live.svg", title: "Live chat", description: "You can live chat with your freelancers to get constant updates on the progress of your work."},
                {link: "/images/about/pay.svg", title: "Pay for quality", description: "Pay for work when it has been completed and you're 100% satisfied."},
                {link: "/images/about/track.svg", title: "Track progress", description: "Keep up-to-date and on-the-go with our time tracker, and mobile app."},
                {link: "/images/about/support.svg", title: "24/7 support", description: "We're always here to help. Our support consists of real people who are available 24/7."}
            ]
        }
    }

    render () {
        return (
            <div id="great-about">
                <h2>What's great about it?</h2>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, id) => {
                            return(
                                <div key={id} className="col-md-4">
                                    <img src={item.link} alt={item.title} />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default GreatAboutIt;