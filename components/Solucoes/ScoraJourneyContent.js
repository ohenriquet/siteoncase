import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                            <h3>Foco no cliente</h3>
                            <p>Clientes são o que move nossas empresas, e hoje possuímos diversos sistemas para auxiliar na gestão dessa jornada da nossa empresa com esses clientes.</p>
                            
                            <p>Estamos falando de todas as interações que temos com eles, desde andtes de ser cliente - um <i>prospect</i> - passando pelos pontos de contato - engajamento - até o momento que ele nos deixa - <i>churn</i>.</p>

                            <p>Já parou para pensar na quantidade de dados e lições aprendidas que existem nessa jornada e temos espalhados nos nossos sistemas? Como você está fazendo para tirar <i>insights</i> disso?</p>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-journey-1.jpg")} alt="Scora Journey" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-journey-2.jpg")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                            <p>A intenção não é capturar todas as jornadas possíveis do cliente - e são muitas! - mas entender as jornadas campeãs, respeitando as peculiaridades de cada cliente, e os momentos ideais para oferecer algum produto novo e adequado, entender como otimizar sua felicidade e como torná-lo um entusiasta do nosso produto.</p>

                            <p>Estamos falando de ajudar na decisão e entender os porquês. Tanto na aquisição, na lealdade à marca quanto no aumento de valor dele ao longo do tempo (LTV). Ou seja, não apenas apresentar informações em um dashboard, mas ser presente com inteligência de recomendações, agrupamentos e influenciar na decisão.</p>

                            <p>Quer entender de forma orientada a dados a jornada do seu cliente de forma compreensiva e em tempo real? Venha conosco para gerar ações efetivas em escala.</p>
                            <br>
                                </br>
                                <div className="others-options">
                                        <Link href="/jornada-cliente">
                                            <a className="default-btn">
                                                Conheça um case de sucesso
                                                <span></span>
                                            </a>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;