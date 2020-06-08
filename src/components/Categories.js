import React, { Component } from 'react';

class Categories extends Component {
    // todo: get Categories from api
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {image: "/images/categories/hire-php.svg", title: "Title", description: "PHP"},
                {image: "/images/categories/hire-website-design.svg", title: "Title", description: "Website"},
                {image: "/images/categories/hire-graphic-design.svg", title: "Title", description: "Graphic"},
                {image: "/images/categories/hire-mobile-apps.svg", title: "Title", description: "Mobile"},
                {image: "/images/categories/hire-android.svg", title: "Title", description: "Andriod"},
                {image: "/images/categories/hire-iphone-apps.svg", title: "Title", description: "iPhone"},
                {image: "/images/categories/hire-photoshop.svg", title: "Title", description: "Photoshop"},
                {image: "/images/categories/hire-logo-design.svg", title: "Title", description: "Logo"},
                {image: "/images/categories/hire-article-writing.svg", title: "Title", description: "Article"},
                {image: "/images/categories/hire-data-entry.svg", title: "Title", description: "Data"},
                {image: "/images/categories/hire-internet-marketing.svg", title: "Title", description: "Internet"},
                {image: "/images/categories/hire-seo.svg", title: "Title", description: "SEO"},
                {image: "/images/categories/hire-php.svg", title: "Title", description: "PHP"},
                {image: "/images/categories/hire-website-design.svg", title: "Title", description: "Website"},
                {image: "/images/categories/hire-graphic-design.svg", title: "Title", description: "Graphic"},
                {image: "/images/categories/hire-mobile-apps.svg", title: "Title", description: "Mobile"},
                {image: "/images/categories/hire-android.svg", title: "Title", description: "Andriod"},
                {image: "/images/categories/hire-iphone-apps.svg", title: "Title", description: "iPhone"},
                {image: "/images/categories/hire-photoshop.svg", title: "Title", description: "Photoshop"},
                {image: "/images/categories/hire-logo-design.svg", title: "Title", description: "Logo"},
                {image: "/images/categories/hire-article-writing.svg", title: "Title", description: "Article"},
                {image: "/images/categories/hire-data-entry.svg", title: "Title", description: "Data"},
                {image: "/images/categories/hire-internet-marketing.svg", title: "Title", description: "Internet"},
                {image: "/images/categories/hire-seo.svg", title: "Title", description: "SEO"},
                {image: "/images/categories/hire-php.svg", title: "Title", description: "PHP"},
                {image: "/images/categories/hire-website-design.svg", title: "Title", description: "Website"},
                {image: "/images/categories/hire-graphic-design.svg", title: "Title", description: "Graphic"},
                {image: "/images/categories/hire-mobile-apps.svg", title: "Title", description: "Mobile"},
                {image: "/images/categories/hire-android.svg", title: "Title", description: "Andriod"},
                {image: "/images/categories/hire-iphone-apps.svg", title: "Title", description: "iPhone"},
                {image: "/images/categories/hire-photoshop.svg", title: "Title", description: "Photoshop"},
                {image: "/images/categories/hire-logo-design.svg", title: "Title", description: "Logo"},
                {image: "/images/categories/hire-article-writing.svg", title: "Title", description: "Article"},
                {image: "/images/categories/hire-data-entry.svg", title: "Title", description: "Data"},
                {image: "/images/categories/hire-internet-marketing.svg", title: "Title", description: "Internet"},
                {image: "/images/categories/hire-seo.svg", title: "Title", description: "SEO"},
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
