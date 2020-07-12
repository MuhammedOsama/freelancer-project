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
                    {this.props.items.map((image) => {
                        return (
                            <div key={image.id}>
                                <img src={image.image} alt={image.title} />
                            </div>
                        )
                    })}
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