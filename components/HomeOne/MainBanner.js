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
                                        <h1>Plataforma Scora</h1>
                                        <p>Detecte rápido, tome decisões inteligentes e deixe todo esse trabalho para o Scora. Uma plataforma de Big Data e Machine Learning para co-criação de produtos analíticos focados em scoring e automação, reduzindo o tempo de descoberta de anomalias.</p>

                                        <div className="banner-btn">
                                            <Link href="/about-us">
                                                <a className="default-btn-one">
                                                    Saiba mais
                                                    <span></span>
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn" href="/contact">
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
                                            <img src={require("../../images/home-two/home-two-shape1.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInLeft' delay='1s'>
                                            <img src={require("../../images/home-two/home-two-shape2.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInRight' delay='1s'>
                                            <img src={require("../../images/home-two/home-two-shape3.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <img src={require("../../images/home-two/home-two-shape4.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='zoomIn' delay='1s'>
                                            <img src={require("../../images/home-two/home-two-shape5.png")} alt="image" />
                                        </ReactWOW>

                                        {/* Main image */}
                                        <ReactWOW animation='zoomIn' delay='1s'>
                                            <img src={require("../../images/home-two/main-image2.png")} alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div className="circle-img">
                                        <img src={require("../../images/home-two/home-two-shape6.png")} alt="image" />
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