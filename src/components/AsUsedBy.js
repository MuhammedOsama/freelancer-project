import React from 'react';
import {connect} from 'react-redux';
import {fetchAsUsedBy} from "../actions";
class AsUsedBy extends React.Component {

    componentDidMount() {
        this.props.fetchAsUsedBy()
        .then(data => {
            console.log(data);
            
        })
    }

    render() {
        
        return(
            <div id="as-used-by-block" className="container">
                <span>As used By</span>
                <div>
                    {/* {this.props.data.map((image) => {
                        return (
                            <div key={image.id}>
                                {<img src={image.image} alt={image.title } />}
                            </div>
                        )
                    })} */}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps, {fetchAsUsedBy})(AsUsedBy);