import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title"  style={{maxWidth:"800px", margin:"auto"}}>
                        <h2 style={{margin:"10px 0 10px 0"}}>Oferecemos soluções para diversos problemas de dados, inclusive o seu.</h2>
                        <spam >Reunimos competências que combinam estratégias de Negócios e Tecnologia avançadas de Big Data, Business Intelligence, Analytics e Inteligência artificial para resolver problemas reais do mercado.</spam>
                    </div>

                    <div className="row justify-content-md-center" style={{margin:"20px 0 0 0"}}>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-big-data"></i>
                                </div>

                                <h3>Big Data</h3>
                                <p>Implementamos soluções de Big Data para ajudar sua empresa a extrair valor de um grande volume de dados provinientes de várias fontes diferentes.</p>

                                <Link href="/big-data">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-data-analytics"></i>
                                </div>

                                <h3>Business Intelligence e Analytics</h3>
                                <p>Tornamos possíveis análises preditivas, prescritivas e descritivas que ajudam a responder, em altíssimo nível de complexidade e granularidade.</p>

                                <Link href="/business-intelligence-analytics">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-chart"></i>
                                </div>
                                <h3>Inteligência Artificial</h3>
                                <p>O nosso foco é encontrar casos de utilização reais para incorporar Inteligência Artificial (IA) nas diferentes áreas corporativas, com recurso às melhores tecnologias.</p>

                                <Link href="/inteligencia-artificial">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-science"></i>
                                </div>
                                <h3>Cocriação de produtos</h3>
                                <center>
                                    <p>Somos especializados em soluções de Co-criação e Desenvolvimento de Produtos Analíticos, Sistemas de Predição ou Prescrição sob medida.</p>
                                    </center>
                                <Link href="/oncase-labs">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-data-management"></i>
                                </div>
                                <h3>Identificação de fraudes</h3>
                                <p>Analise contratos e documentações através da identificação de padrões e receba indicações de prováveis tentativas de fraudes.</p>

                                <Link href="/service-details">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;