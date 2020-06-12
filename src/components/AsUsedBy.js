import React, { Component } from 'react';

class AsUsedBy extends Component {
    constructor(props) {
        super(props);
            this.state = {
                items: [
                {image: "/images/used/microsoft.svg", description: "Microsoft"},
                {image: "/images/used/sap.svg", description: "Sap"},
                {image: "/images/used/metlife.svg", description: "MetLife"},
                {image: "/images/used/intel.svg", description: "Intel"},
                {image: "/images/used/boeing.svg", description: "Boeing"},
                {image: "/images/used/avery.svg", description: "Avery"},
                {image: "/images/used/pwc.svg", description: "Pwc"},
                {image: "/images/used/ge.svg", description: "Ge"}
            ]
        }
    }

    render() {
        return(
            <div id="as-used-by-block">
                <span>As used By</span>
                {this.state.items.map((item, id) => {
                    return (
                        <div key={id}>
                            <img src={item.image} alt={item.description} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AsUsedBy;
