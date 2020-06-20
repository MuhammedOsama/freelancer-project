import React from "react";
import{Image} from "react-bootstrap";


const AsUsedBy =()=>{

    const images=[
        {link: "/images//used/microsoft.svg", alt: "Microsoft", class: "col-md-2 col-4"},
        {link: "/images//used/sap.svg", alt: "Sap", class: "col-md-2 col-4"},
        {link: "/images//used/metlife.svg", alt: "MetLife", class: "col-md-2 col-4"},
        {link: "/images//used/intel.svg", alt: "Intel", class: "col-md-2 col-4"},
        {link: "/images//used/boeing.svg", alt: "Boeing", class: "col-md-2 col-4"},
        {link: "/images//used/avery.svg", alt: "Avery", class: "col-md-2 col-4"}
    ]
    
    return(
    <div id="used-by" className="container px-0 mx-0">
        <div className="row main-row m-0">
            <div className=" column-1 text-center ">
              <span>As used by</span>
            </div>
            <div className=" column-2 ">
                <div className="row m-0">
                    {images.map((image, i) => {
                        return (
                            <div key={i} className={image.class}>
                                <Image src={image.link} alt={image.alt} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    );
}

export default AsUsedBy;