import React, { Component } from 'react';
import Link from 'next/link';

class AboutUsContent extends Component {
    render() {
        return (
            <section className="about-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../images/about.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Sobre Nós</span>
                                <h2>Pioneira em BI & Data Analytics no Brasil</h2>
                                <p>Somos parceiros na transformação digital das maiores organizações do Brasil e do mundo. Reunimos competências que combinam estratégias de Negócios e Tecnologia avançadas de Big Data, Business Intelligence, Analytics e Inteligência artificial para resolver problemas reais do mercado.</p>

                                <p>Já ajudamos organizações de diversos segmentos de mercado a alcançarem seus resultados com excelência, por meio de uma abordagem orientada a dados. Contamos com uma equipe formada por especialista de diversas áreas, como: Engenharia de Dados, Arquitetura de Soluções, Ciência de Dados, UX Design, Análise de Negócios e Gestão de produtos, focados em resolver problemas e gerar análises inteligentes e coerentes para nossos clientes.</p>
                                <br></br>
                                <h3>Nossa visão</h3>
                                <p>Ser uma empresa de classe mundial reconhecida como a melhor da LATAM em Analytics e Big Data pela excelência e resultado de seus serviços e produtos.</p>
                                <br></br>
                                <h3>Nossa missão</h3>
                                <p>Ajudar empresas na transformação digital com uma abordagem orientada à dados.</p>
                                <br></br>
                                <h3>O que valorizamos</h3>
                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Inovação
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Transformação
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Comprometimento
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Transparência
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Entrega
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Agilidade
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsContent;