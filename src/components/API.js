import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchApiCard } from "../actions/actions";

class API extends Component {

    componentDidMount() {
        this.props.fetchApiCard();
    }

    render(){
        return (
            <div className="container cards">
                <div className="row">
                    {
                       this.props.items.map((card,id)=>{
                            return(
                                <div key={id} className="col-md-6">
                                    <div className="row lhs">
                                        <div className={"col-xl-6 "+ card.imgClass}>
                                            <Image className="w-100" src={card.image} alt={card.alter}/>
                                        </div>
                                        <div className={"col-xl-6 details "+card.txt}>
                                            <span>{card.title}</span>
                                            <h3>{card.desc}</h3>
                                            <p>{card.details}</p>
                                            <a href="/" className="d-none d-xl-inline-block">{card.btn}</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log(state.apiCard);
    return {
        items: state.apiCard
    }
}

export default connect(mapStateToProps, { fetchApiCard })(API);