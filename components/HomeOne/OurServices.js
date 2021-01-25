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
                            <h1 className="display-4" style={{fontWeight:500}}>Oferecemos soluções inteligentes para problemas de dados</h1>
                            {/* <p className="lead mb-4">Reunimos competências que combinam estratégias de Negócios e Tecnologia avançadas de Big Data, Business Intelligence, Analytics e Inteligência artificial para resolver problemas reais do mercado.</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <div className="mb-2">
                                    <Link href="/oncase-labs">
                                        <img src={require("../../images/home/cocriacao.png")} alt="Oncase Cocriação"/>
                                    </Link>
                            </div>
                        </div>
                        <div className="col-6" style={{verticalAlign:"center",paddingTop:"60px"}}>
                            <div style={{verticalAlign:"center"}}>
                                <h4 style={{color:"#8104D6",fontWeight:"bold",fontSize:"1.6rem"}}>Cocriação</h4>
                                <div className="small">
                                    <p style={{fontWeight:"600",fontSize:"17px"}}>Somos especializados em soluções de Cocriação e Desenvolvimento de Produtos Analíticos, feitos sob medida para atender as necessidades do seu time.</p>
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
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6" style={{verticalAlign:"center",paddingTop:"60px",textAlign:"right"}}>
                            <h4 style={{color:"#8104D6",fontWeight:"bold",fontSize:"1.6rem"}}>Jornada do Cliente</h4>
                            <div className="small">
                                <p style={{fontWeight:"600",fontSize:"17px"}}>Aprimore a jornada dos seus clientes e receba insights para aumentar o ticket médio, a satisfação do cliente e diminuir o churn.</p>
                                <Link href="/scora-journey">
                                    <a className="weight-500 action-link">
                                        <span>Saiba mais
                                        <i className="flaticon-right"></i></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="mb-2">
                            <Link href="/scora-journey">
                                <img src={require("../../images/home/jornada.png")} alt="Scora Journey" />
                            </Link>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-3 mb-4 mb-md-0">
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
                        </div> */}
                        {/* <div className="col-12 col-md-3 mb-4 mb-md-0">
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
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;