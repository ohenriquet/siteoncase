import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="py-5">
                        <div className="row justify-content-center text-center py-3">
                            <div className="col-12 col-md-8">
                            <h1 className="display-4">Oferecemos soluções para problemas de dados, inclusive o seu.</h1>
                            <p className="lead mb-4">Reunimos competências que combinam estratégias de Negócios e Tecnologia avançadas de Big Data, Business Intelligence, Analytics e Inteligência artificial para resolver problemas reais do mercado.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="mb-2">
                                    <i className="flaticon-big-data"  style={{fontSize:"32px"}}></i>
                            </div>
                            <h4>Big Data</h4>
                            <div className="small">
                                <p>Implementamos soluções de Big Data para ajudar sua empresa a extrair valor de um grande volume de dados provinientes de várias fontes diferentes.</p>
                                <Link href="/big-data">
                                    <a className="weight-500 action-link">
                                        <span>Saiba mais
                                        <i className="flaticon-right"></i></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="mb-2">
                                    <i className="flaticon-data-analytics"  style={{fontSize:"32px"}}></i>
                            </div>
                            <h4>BI e Analytics</h4>
                            <div className="small">
                                <p>Tornamos possíveis análises preditivas, prescritivas e descritivas que ajudam a responder, em altíssimo nível de complexidade e granularidade.</p>
                                <Link href="/business-intelligence-analytics">
                                    <a className="weight-500 action-link">
                                        <span>Saiba mais
                                        <i className="flaticon-right"></i></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="mb-2">
                                    <i className="flaticon-chart"  style={{fontSize:"32px"}}></i>
                            </div>
                            <h4>Inteligência Artificial</h4>
                            <div className="small">
                                <p>O nosso foco é encontrar casos de utilização reais para incorporar Inteligência Artificial (IA) nas diferentes áreas corporativas, com recurso às melhores tecnologias.</p>
                                <Link href="/inteligencia-artificial">
                                    <a className="weight-500 action-link">
                                        <span>Saiba mais
                                        <i className="flaticon-right"></i></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="mb-2">
                                    <i className="flaticon-science"  style={{fontSize:"32px"}}></i>
                            </div>
                            <h4>Cocriação de produtos</h4>
                            <div className="small">
                                <p>Somos especializados em soluções de Co-criação e Desenvolvimento de Produtos Analíticos, Sistemas de Predição ou Prescrição sob medida.</p>
                                <Link href="/oncase-labs">
                                    <a className="weight-500 action-link">
                                        <span>Saiba mais
                                        <i className="flaticon-right"></i></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;