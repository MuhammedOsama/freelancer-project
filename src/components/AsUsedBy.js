import React, { Component } from 'react';

class AsUsedBy extends Component {
    constructor(props) {
        super(props);
            this.state = {
                items: [
                {link: "/images/used/microsoft.svg", imageAlt : "Microsoft"},
                {link: "/images/used/sap.svg", imageAlt : "Sap"},
                {link: "/images/used/metlife.svg", imageAlt : "MetLife"},
                {link: "/images/used/intel.svg", imageAlt : "Intel"},
                {link: "/images/used/boeing.svg", imageAlt : "Boeing"},
                {link: "/images/used/avery.svg", imageAlt : "Avery"},
                {link: "/images/used/pwc.svg", imageAlt : "Pwc"},
                {link: "/images/used/ge.svg", imageAlt : "Ge"}
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
                            <img src={item.link} alt={item.imageAlt } />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AsUsedBy;
