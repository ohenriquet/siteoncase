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
                                        <h1 className="display-4" style={{fontWeight:"500"}}>Levamos inteligência aos seus dados</h1>
                                        <div className="row align-items-center">
                                        <div className="col-12 col-md-5 mb-2 mb-md-0">
                                            <Link href="/sobre-nos">
                                                <a className="btn btn-block btn-lg btn-primary">Saiba mais</a>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 order-1 order-md-2 pl-md-0 mb-4 mb-md-0">
                                        {/* Main image */}
                                        {/* <ReactWOW animation='zoomIn' delay='1s'>
                                            <img className="w-100" src={require("../../images/home/video-home.gif")} alt="image" />
                                        </ReactWOW> */}
                                        {/* <ReactWOW animation='zoomIn' delay='1s'>
                                            <img className="w-100" src={require("../../images/home-two/image.png")} alt="image" />
                                        </ReactWOW> */}

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