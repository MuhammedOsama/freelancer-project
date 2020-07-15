import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorite } from "../actions/actions";

class Favorite extends Component {

    componentDidMount() {
        this.props.fetchFavorite();
    }

    render () {
        return (
            <div id="favorite">
                <h2>Crowd favorites<br/>Here are some of our most popular projects:</h2>
                <div className="container">
                    <div className="row">
                        {this.props.items.map((item, id) => {
                            return(
                            <div key={id} className="col-lg-4 col-md-6">
                                <div className="crowd-box">
                                    <img src={item.link} alt={item.title}/>
                                    <div className="price-box">
                                        <h5>{item.title}</h5>
                                        <span>{item.desc}</span>
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

const mapStateToProps = state => {
    console.log(state.favorite);
    return {
        items: state.favorite
    }
}

export default connect(mapStateToProps, { fetchFavorite })(Favorite);