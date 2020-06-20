import React, { Component } from 'react';

class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {link: "/images/crowd/website.png", title: "Website Development", description: "From $300 USD"},
                {link: "/images/crowd/graphic.png", title: "Graphic Design", description: "From $100 USD"},
                {link: "/images/crowd/design.png", title: "Logo Design", description: "From $50 USD"},
                {link: "/images/crowd/marketing.png", title: "Marketing", description: "From $150 USD"},
                {link: "/images/crowd/writing.png", title: "Writing", description: "From $50 USD"},
                {link: "/images/crowd/mobile.png", title: "Mobile App", description: "From $50 USD / hour"}
            ]
        }
    }

    render () {
        return (
            <div id="favorite">
                <h2>Crowd favorites<br/>Here are some of our most popular projects:</h2>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, id) => {
                            return(
                            <div key={id} className="col-lg-4 col-md-6">
                                <div className="crowd-box">
                                    <img src={item.link} alt={item.title}/>
                                    <div className="price-box">
                                        <h5>{item.title}</h5>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Favorite;