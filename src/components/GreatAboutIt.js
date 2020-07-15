import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutIt } from '../actions/actions';

class GreatAboutIt extends Component {

    componentDidMount () {
        this.props.fetchAboutIt();
    }

    render () {
        return (
            <div id="great-about">
                <h2>What's great about it?</h2>
                <div className="container">
                    <div className="row">
                        {this.props.items.map((item, id) => {
                            return(
                                <div key={id} className="col-lg-4 col-md-6">
                                    <img src={item.link} alt={item.title} />
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
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
    console.log(state.greatAboutIt);
    return {
        items: state.greatAboutIt
    }
}

export default connect(mapStateToProps, { fetchAboutIt })(GreatAboutIt);