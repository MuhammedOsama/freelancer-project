import React, { Component } from 'react';

class JobCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [
                {icon: "fas fa-caret-right", title: "PHP"},
                {icon: "fas fa-caret-right", title: "Graphic Design"},
                {icon: "fas fa-caret-right", title: "Website Design"},
                {icon: "fas fa-caret-right", title: "HTML"},
                {icon: "fas fa-caret-right", title: "Logo Design"},
                {icon: "fas fa-caret-right", title: "PhotoShop"},
                {icon: "fas fa-caret-right", title: "WordPress"},
                {icon: "fas fa-caret-right", title: "Article Writing"},
                {icon: "fas fa-caret-right", title: "Javascript"},
                {icon: "fas fa-caret-right", title: "Mobile App Development"},
                {icon: "fas fa-caret-right", title: "Software Architecture"},
                {icon: "fas fa-caret-right", title: "Data Entry"},
                {icon: "fas fa-caret-right", title: "Android"},
                {icon: "fas fa-caret-right", title: "Excel"},
                {icon: "fas fa-caret-right", title: "Css"},
                {icon: "fas fa-caret-right", title: "HTML5"},
                {icon: "fas fa-caret-right", title: "Internet Marketing"},
                {icon: "fas fa-caret-right", title: "Copywriting"},
                {icon: "fas fa-caret-right", title: "SEO"},
                {icon: "fas fa-caret-right", title: "iPhone"},
                {icon: "fas fa-caret-right", title: "Research Writing"},
                {icon: "fas fa-caret-right", title: "Translation"},
                {icon: "fas fa-caret-right", title: "Java"},
                {icon: "fas fa-caret-right", title: "MySQL"},
                {icon: "fas fa-caret-right", title: "Ghostwriting"},
                {icon: "fas fa-caret-right", title: "Marketing"},
                {icon: "fas fa-caret-right", title: "Date Processing"},
                {icon: "fas fa-caret-right", title: "Technical Writing"},
                {icon: "fas fa-caret-right", title: "Python"},
                {icon: "fas fa-caret-right", title: "Social Media Marketing"},
                {icon: "fas fa-caret-right", title: "Research"},
                {icon: "fas fa-caret-right", title: "Link Building"},
                {icon: "fas fa-caret-right", title: "C# Programming"},
                {icon: "fas fa-caret-right", title: "3D Modelling"},
                {icon: "fas fa-caret-right", title: "Web Search"},
                {icon: "fas fa-caret-right", title: "Web Scraping"},
                {icon: "fas fa-caret-right", title: "3D Rendering"},
                {icon: "fas fa-caret-right", title: "Linux"},
                {icon: "fas fa-caret-right", title: "Video Services"},
                {icon: "fas fa-caret-right", title: "C++ Programming"},
                {icon: "fas fa-caret-right", title: "eCommerce"},
                {icon: "fas fa-caret-right", title: "Banner Design"},
                {icon: "fas fa-caret-right", title: "Illustration"},
                {icon: "fas fa-caret-right", title: "Proofreading"},
                {icon: "fas fa-caret-right", title: "3D Animation"},
                {icon: "fas fa-caret-right", title: "Content Writing"},
                {icon: "fas fa-caret-right", title: "See All"}
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
                                    <a href="/"><i className={item.icon}></i>{item.title}</a>
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