import React, { Component } from 'react';

class Company extends Component {
    render() {
        return(
            <div className="col">
                As used by
                <img src="/images/used/microsoft.svg" alt="Microsoft"/>
                <img src="/images/used/sap.svg" alt="Sap"/>
                <img src="/images/used/metlife.svg" alt="MetLife"/>
                <img src="/images/used/intel.svg" alt="Intel"/>
                <img src="/images/used/boeing.svg" alt="Boeing"/>
                <img src="/images/used/avery.svg" alt="Avery"/>
                <img src="/images/used/pwc.svg" alt="Pwc"/>
                <img src="/images/used/ge.svg" alt="Ge"/>
            </div>
        );
    }
}

export default Company;