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
                            <h1 className="display-4">Oferecemos soluções inteligentes para problemas de dados</h1>
                            <p className="lead mb-4">Reunimos competências que combinam estratégias de Negócios e Tecnologia avançadas de Big Data, Business Intelligence, Analytics e Inteligência artificial para resolver problemas reais do mercado.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="mb-2">
                                    <i className="flaticon-big-data"  style={{fontSize:"32px"}}></i>
                            </div>
                            <h4>Plataforma</h4>
                            <div className="small">
                                <p>Utilize nossa consultoria para otimizar ou construir sua plataforma de dados em cloud ou local, da captação e extração de dados ao data warehouse.</p>
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
                            <h4>Cocriação</h4>
                            <div className="small">
                                <p>Somos especializados em soluções de Cocriação e Desenvolvimento de Produtos Analíticos, feitos sob medida para atender as necessidades do seu time.</p>
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
                            <h4>Jornada do Cliente</h4>
                            <div className="small">
                                <p>Enriqueça a jornada dos seus clientes e receba insights para oferecer outros produtos do seu catálogo.</p>
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
                            <h4>Saneamento</h4>
                            <div className="small">
                                <p>Monitore todas as variáveis relacionadas ao desempenho dos seus hidrômetros para saber o melhor momento de realizar manutenção ou substituição.</p>
                                <Link href="/oncase-labs">
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
                            <h4>Previsão de Demanda</h4>
                            <div className="small">
                                <p>Analise informações estratégicas do meracado para prever tendências e planeje os seus recursos de forma inteligente.</p>
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