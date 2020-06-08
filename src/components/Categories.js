import React, { Component } from 'react';

class Categories extends Component {
    // todo: get Categories from api
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {image: "/images/categories/hire-php.svg", title: "PHP", description: "PHP"},
                {image: "/images/categories/hire-website-design.svg", title: "Website", description: "Website"},
                {image: "/images/categories/hire-graphic-design.svg", title: "Graphic", description: "Graphic"},
                {image: "/images/categories/hire-mobile-apps.svg", title: "Mobile Apps", description: "Mobile"},
                {image: "/images/categories/hire-android.svg", title: "Andriod Apps", description: "Andriod"},
                {image: "/images/categories/hire-iphone-apps.svg", title: "iPhone Apps", description: "iPhone"},
                {image: "/images/categories/hire-photoshop.svg", title: "Photoshop", description: "Photoshop"},
                {image: "/images/categories/hire-logo-design.svg", title: "Logo Design", description: "Logo"},
                {image: "/images/categories/hire-article-writing.svg", title: "Article Writing", description: "Article"},
                {image: "/images/categories/hire-data-entry.svg", title: "Data Entry", description: "Data"},
                {image: "/images/categories/hire-internet-marketing.svg", title: "Internet Marketing", description: "Internet"},
                {image: "/images/categories/hire-seo.svg", title: "SEO", description: "SEO"},
                {image: "/images/categories/hire-3d-modeling.svg", title: "3D Modelling", description: "Modelling"},
                {image: "/images/categories/hire-copy-writing.svg", title: "Copywriting", description: "Copy"},
                {image: "/images/categories/hire-ghost-writing.svg", title: "Ghostwriting", description: "Ghost"},
                {image: "/images/categories/hire-linux.svg", title: "Linux", description: "Linux"},
                {image: "/images/categories/hire-aws.svg", title: "Amazon Web Services", description: "Amazon"},
                {image: "/images/categories/hire-banner-design.svg", title: "Banner Design", description: "Banner"},
                {image: "/images/categories/hire-software-dev.svg", title: "Software Development", description: "Software"},
                {image: "/images/categories/hire-accounting.svg", title: "Accounting", description: "Accounting"},
                {image: "/images/categories/hire-finance.svg", title: "Finance", description: "Finance"},
                {image: "/images/categories/hire-legal.svg", title: "Legal", description: "Legal"},
                {image: "/images/categories/hire-manufacturing.svg", title: "Manufacturing", description: "Manufacturing"},
                {image: "/images/categories/hire-logistics.svg", title: "Logistics", description: "Logistics"}
            ]
        }
    }

    render() {
        return(
            <div className="categories">
                <h2>Get work done in over 1350 different categories</h2>
                <div className="container text-center">
                    <div className="row">
                        {this.state.items.map((item, id) => {
                            return (
                                <div key={id} className="col-1 mb-5">
                                    <img src={item.image} alt={item.description} />
                                    <a href="/">{item.title}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;
