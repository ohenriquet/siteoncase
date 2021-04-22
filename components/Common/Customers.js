import React, { Component } from 'react';
// import Link from 'next/link';

class Customers extends Component {
    render() {
        return (
            <div className="py-4">
                <div className="small text-center text-muted mb-lg-3">Clientes que fazem parte da nossa história</div>

                <div className="row justify-content-center justify-content-lg-between text-center align-items-center">
                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner1.webp")} alt="MPD" />
                            </a>
                    </div>

                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner2.webp")} alt="CAERN" />
                            </a>
                    </div>

                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner3.webp")} alt="CATENO" />
                            </a>
                    </div>

                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner4.webp")} alt="CAIXA" />
                            </a>
                    </div>

                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner5.webp")} alt="SEBRAE" />
                            </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Customers;