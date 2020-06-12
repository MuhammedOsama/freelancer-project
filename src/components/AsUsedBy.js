import React, { Component } from 'react';

class AsUsedBy extends Component {
    constructor(props) {
        super(props);
            this.state = {
                items: [
                {image: "/images/used/microsoft.svg", link: "Microsoft"},
                {image: "/images/used/sap.svg", link: "Sap"},
                {image: "/images/used/metlife.svg", link: "MetLife"},
                {image: "/images/used/intel.svg", link: "Intel"},
                {image: "/images/used/boeing.svg", link: "Boeing"},
                {image: "/images/used/avery.svg", link: "Avery"},
                {image: "/images/used/pwc.svg", link: "Pwc"},
                {image: "/images/used/ge.svg", link: "Ge"}
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
                            <img src={item.image} alt={item.link} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AsUsedBy;
