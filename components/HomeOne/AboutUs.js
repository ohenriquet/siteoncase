import React, { Component } from 'react';
import Link from 'next/link';

class AboutUs extends Component {
    render() {
        return (
            <section className="about-section pb-100">
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
                                <h2>Tome decisões inteligentes com o Scora</h2>
                                <p>Nossa plataforma usa tecnologias de Big Data e Inteligência Artificial para resolver problemas de classificação, predição e automação, reduzindo drasticamente o tempo de descoberta de anomalias.</p>

                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Aumento no faturamento
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Otimização de custos
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Visão 360° sobre seus ativos
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Projeção de mercado, caixa e demanda
                                    </li>
                                </ul>
                                
                                <Link href="/sobre-nos">
                                    <a className="default-btn">
                                        Saiba mais <span></span>
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

export default AboutUs;