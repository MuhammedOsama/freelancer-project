import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsUsedBy } from "../actions/actions";
class AsUsedBy extends Component {

    componentDidMount() {
        this.props.fetchAsUsedBy();
    }

    render() {
        
        return(
            <div id="as-used-by-block" className="container">
                <span>As used By</span>
                <div>
                    <div className="row">
                        {this.props.items.map((image, id) => {
                            return (
                                <div className="col" key={id}>
                                    <img src={image.image} alt={image.title} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log(state.asUsedBy);
    return {
        items: state.asUsedBy
    }
}

export default connect(mapStateToProps, { fetchAsUsedBy })(AsUsedBy);
