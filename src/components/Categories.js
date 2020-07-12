import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/actions';

class Categories extends Component {
   
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return(
            <div className="categories">
                <h2>Get work done in over 1350 different categories</h2>
                <div className="container text-center">
                    <div className="row">
                        {this.props.items.map((item, id) => {
                            return (
                                <div key={id} className="col-4 col-md-3 col-lg-1">
                                    <div className="category">
                                        <img src={item.image} alt={item.description} />
                                        <a href="/">{item.title}</a>
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

const mapStateToProps = state => {
    console.log(state.categories);
    return {
        items: state.categories
    }
}

export default connect(mapStateToProps, { fetchCategories })(Categories);