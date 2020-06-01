import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return(
            <div className="categories">
                <h2>Get work done in over 1350 different categories</h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="/images/categories/hire-php.svg" alt="Php"/>
                            <p>PHP</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-website-design.svg" alt="Website"/>
                            <p>Website Design</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-graphic-design.svg" alt="Graphic"/>
                            <p>Graphic Design</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-mobile-apps.svg" alt="Mobile"/>
                            <p>Mobile</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-android.svg" alt="Android"/>
                            <p>Android Apps</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-iphone-apps.svg" alt="iPhone"/>
                            <p>iPhone Apps</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-photoshop.svg" alt="Photoshop"/>
                            <p>Photoshop</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-logo-design.svg" alt="Logo"/>
                            <p>Logo Design</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-article-writing.svg" alt="Article"/>
                            <p>Article Writing</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-data-entry.svg" alt="Data"/>
                            <p>Data Entry</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-internet-marketing.svg" alt="Internet"/>
                            <p>Internet Marketing</p>
                        </div>
                        <div className="col">
                            <img src="/images/categories/hire-seo.svg" alt="Seo"/>
                            <p>SEO</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;
