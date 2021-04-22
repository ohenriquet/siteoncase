import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner-two">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <h1>Decisões inteligentes baseadas em dados</h1>

                                        <div className="banner-btn">
                                            <Link href="/sobre-nos">
                                                <a className="default-btn-one">
                                                    Saiba mais
                                                    <span></span>
                                                </a>
                                            </Link>

                                            <Link href="/contato">
                                                <a className="default-btn" href="/contato">
                                                    Entre em contato 
                                                    <span></span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        {/* Shape images */}
                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <img src={require("../../images/home-two/image.png")} alt="image" />
                                        </ReactWOW>

                                        {/* Main image */}
                                        <ReactWOW animation='zoomIn' delay='1s'>
                                            <img src={require("../../images/home-two/image.png")} alt="image" />
                                        </ReactWOW>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="shape-dot">
                    <img src={require("../../images/main-banner-shape/main-banner-dot.png")} alt="main-image" />
                </div>
            </div>
        );
    }
}

export default MainBanner;