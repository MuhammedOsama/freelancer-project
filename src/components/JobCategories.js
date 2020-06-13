import React, { Component } from 'react';

class JobCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [
                {awesome: "fas fa-caret-right", title: "PHP"},
                {awesome: "fas fa-caret-right", title: "Graphic Design"},
                {awesome: "fas fa-caret-right", title: "Website Design"},
                {awesome: "fas fa-caret-right", title: "HTML"},
                {awesome: "fas fa-caret-right", title: "Logo Design"},
                {awesome: "fas fa-caret-right", title: "PhotoShop"},
                {awesome: "fas fa-caret-right", title: "WordPress"},
                {awesome: "fas fa-caret-right", title: "Article Writing"},
                {awesome: "fas fa-caret-right", title: "Javascript"},
                {awesome: "fas fa-caret-right", title: "Mobile App Development"},
                {awesome: "fas fa-caret-right", title: "Software Architecture"},
                {awesome: "fas fa-caret-right", title: "Data Entry"},
                {awesome: "fas fa-caret-right", title: "Android"},
                {awesome: "fas fa-caret-right", title: "Excel"},
                {awesome: "fas fa-caret-right", title: "Css"},
                {awesome: "fas fa-caret-right", title: "HTML5"},
                {awesome: "fas fa-caret-right", title: "Internet Marketing"},
                {awesome: "fas fa-caret-right", title: "Copywriting"},
                {awesome: "fas fa-caret-right", title: "SEO"},
                {awesome: "fas fa-caret-right", title: "iPhone"},
                {awesome: "fas fa-caret-right", title: "Research Writing"},
                {awesome: "fas fa-caret-right", title: "Translation"},
                {awesome: "fas fa-caret-right", title: "Java"},
                {awesome: "fas fa-caret-right", title: "MySQL"},
                {awesome: "fas fa-caret-right", title: "Ghostwriting"},
                {awesome: "fas fa-caret-right", title: "Marketing"},
                {awesome: "fas fa-caret-right", title: "Date Processing"},
                {awesome: "fas fa-caret-right", title: "Technical Writing"},
                {awesome: "fas fa-caret-right", title: "Python"},
                {awesome: "fas fa-caret-right", title: "Social Media Marketing"},
                {awesome: "fas fa-caret-right", title: "Research"},
                {awesome: "fas fa-caret-right", title: "Link Building"},
                {awesome: "fas fa-caret-right", title: "C# Programming"},
                {awesome: "fas fa-caret-right", title: "3D Modelling"},
                {awesome: "fas fa-caret-right", title: "Web Search"},
                {awesome: "fas fa-caret-right", title: "Web Scraping"},
                {awesome: "fas fa-caret-right", title: "3D Rendering"},
                {awesome: "fas fa-caret-right", title: "Linux"},
                {awesome: "fas fa-caret-right", title: "Video Services"},
                {awesome: "fas fa-caret-right", title: "C++ Programming"},
                {awesome: "fas fa-caret-right", title: "eCommerce"},
                {awesome: "fas fa-caret-right", title: "Banner Design"},
                {awesome: "fas fa-caret-right", title: "Illustration"},
                {awesome: "fas fa-caret-right", title: "Proofreading"},
                {awesome: "fas fa-caret-right", title: "3D Animation"},
                {awesome: "fas fa-caret-right", title: "Content Writing"},
                {awesome: "fas fa-caret-right", title: "See All"}
            ]
        }
    }

    render() {
        return(
            <div className="job">
                <h2>Browse top job categories</h2>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, id) => {
                            return(
                                <div key={id} className="col-md-3">
                                    <a href="/"><i className={item.awesome}></i>{item.title}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default JobCategories;