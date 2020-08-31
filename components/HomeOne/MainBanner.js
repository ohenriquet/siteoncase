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
                            <div className="row justify-content-between align-items-center py-5">
                                <div className="col-12 col-md-5 order-2 order-md-1">
                                    <div className="main-banner-content">
                                        <h1 class="display-4">Decisões inteligentes baseadas em dados</h1>
                                        <div class="row align-items-center">
                                        <div class="col-12 col-md-5 mb-2 mb-md-0"><a class="btn btn-block btn-lg btn-primary" href="/about-us">Saiba mais</a></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 order-1 order-md-2 pl-md-0 mb-4 mb-md-0">
                                        {/* Main image */}
                                        <ReactWOW animation='zoomIn' delay='1s'>
                                            <img class="w-100" src={require("../../images/home-two/image.png")} alt="image" />
                                        </ReactWOW>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;