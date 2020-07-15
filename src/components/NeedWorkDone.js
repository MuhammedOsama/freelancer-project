import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNeedWorkDone } from "../actions/actions";

class NeedWorkDone extends Component {

    componentDidMount() {
        this.props.fetchNeedWorkDone();
    }

    render () {
        return (
            <div className="work-done text-center">
                <h2>Need work done?</h2>
                <div className="container">
                    <div className="row">
                        {this.props.items.map((item, id) => {
                            return (
                                <div key={id} className="col-md-4">
                                    <img src={item.image} alt={item.description} />
                                    <h3>{item.title}</h3>
                                    <p>{item.paragraph}</p>
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
    console.log(state.needWorkDone);
    return {
        items: state.needWorkDone
    }
}

export default connect(mapStateToProps, { fetchNeedWorkDone })(NeedWorkDone);