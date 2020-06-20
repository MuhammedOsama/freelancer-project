import React from 'react';

export default (props) => {
    
        
    const groups = {
        "first-group": {
            items: [
                {link: "/images/used/microsoft.svg", imageAlt : "Microsoft"},
                {link: "/images/used/sap.svg", imageAlt : "Sap"},
                {link: "/images/used/metlife.svg", imageAlt : "MetLife"},
                {link: "/images/used/intel.svg", imageAlt : "Intel"},
            ]
        },
        "second-group": {
            items: [
                {link: "/images/used/boeing.svg", imageAlt : "Boeing"},
                {link: "/images/used/avery.svg", imageAlt : "Avery"},
                {link: "/images/used/pwc.svg", imageAlt : "Pwc"},
                {link: "/images/used/ge.svg", imageAlt : "Ge"},
            ]
        }
    };

    const group = groups[props.groupID] || {};

    return(
        <div id="as-used-by-block" className="container">
            <span>As used By</span>
            <div id ={props.id} className={props.className}>
                {(group.items || []).map((item, id) => {
                    return (
                        <div key={id}>
                            {item.link && <img src={item.link} alt={item.imageAlt } />}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}