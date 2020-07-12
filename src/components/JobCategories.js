import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobCategories } from "../actions/actions";

class JobCategories extends Component {

    componentDidMount() {
        this.props.fetchJobCategories();
    }


    render() {
        return(
            <div className="job">
                <h2>Browse top job categories</h2>
                <div className="container">
                    <div className="row">
                        {this.props.items.map((item, id) => {
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

const mapStateToProps = state => {
    console.log(state.jobCategories);
    return {
        items: state.jobCategories
    }
    
}

export default connect(mapStateToProps, { fetchJobCategories })(JobCategories);