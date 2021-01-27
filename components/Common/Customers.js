import React, { Component } from 'react';
import Link from 'next/link';

class Customers extends Component {
    render() {
        return (
            <div className="py-4">
                <div className="small text-center text-muted mb-lg-3">Clientes que fazem parte da nossa história</div>

                <div className="row justify-content-center justify-content-lg-between text-center align-items-center">
                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner1.png")} alt="MPD" />
                            </a>
                    </div>

                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner2.png")} alt="CAERN" />
                            </a>
                    </div>

                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner3.png")} alt="CATENO" />
                            </a>
                    </div>

                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner4.png")} alt="CAIXA" />
                            </a>
                    </div>

                    <div className="col mt-3 mb-lg-0">
                            <a>
                                <img src={require("../../images/partner/partner5.png")} alt="SEBRAE" />
                            </a>
                    </div>
                </div>

                <div className="partner-shape">
                    <img src={require("../../images/home/Poligono-Lado-Esquerdo-Cima-Página_Home.png")} alt="main-image" />
                </div>
                <div className="partner-shape-img1">
                    <img src={require("../../images/home/Poligono-Lado-Direito-Cima-Página_Home.png")} alt="image" />
                </div>
            </div>
        );
    }
}

export default Customers;