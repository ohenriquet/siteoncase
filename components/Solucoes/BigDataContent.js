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
                                <div className="services-details-desc">
                                    <h3>Alavancamos o uso de Big Data na sua empresa</h3>
                                    <p>Extrair valor de um grande volume de dados provenientes de várias fontes é o principal desafio na implementação de soluções em Big Data.</p>

                                    <p>A elevada competência da nossa equipe multidisciplinar é solidificada sob tecnologias de processamento distribuído de dados, suportada em ferramentas, processos, metodologias ágeis e por parceiros como a <a href="https://www.cloudera.com/">Cloudera</a> e o <a href="https://www.mongodb.com/">MongoDB</a>.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/big-data1.jpg")} alt="Big Data" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <h4>Como Podemos Te Ajudar?</h4>
                        </div>
                        <div className="row vertical-align-center">
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/big-data2.png")} alt="Big Data" style={{width:"auto", height:"200px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Consultoria em Big Data</h5>
                                <p>Você tem os desafios e nós conhecemos a mais nova geração de soluções de Big Data e Internet of Things (IoT). Estamos instigados em colaborar na definição de uma estratégia orientada a extrair valor dos seus dados.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/big-data3.png")} alt="Big Data" style={{width:"auto", height:"200px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Desenvolvimento em Big Data</h5>
                                <p>Os nossos ninjas em Big Data, certificados em tecnologias como Cloudera e base de dados NoSQL, podem te auxiliar no desenvolvimento de orquestração, Pipelines de dados e a depender da necessidade chegar ao Near Real-Time.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/big-data4.png")} alt="Big Data" style={{width:"auto", height:"200px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Consultoria em Big Data</h5>
                                <p>Ajudamos os clientes a especificar, instalar, configurar e gerir o seu ecossistema de Big Data. Com uma vasta experiência neste tipo de soluções, somos o parceiro de referência da Cloudera e da MongoDB..</p>
                            </div>

                        </div>
                    </div>   

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <h4>Casos de sucesso com soluções de Big Data</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/big-data5.png")} alt="Big Data" style={{width:"auto", height:"180px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Setor Financeiro</h5>
                                <p>A Capital One utiliza um hub de dados corporativos da Cloudera para tornar a análise de big data abrangente em toda a organização.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/big-data6.png")} alt="Big Data" style={{width:"auto", height:"180px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Setor de Publishers</h5>
                                <p>Construção de um ecossistema Big Data com o objetivo de oferecer uma melhor qualidade melhorando a experiência dos usuários e, com isso, se tornar uma empresa voltada a dados</p>
                            </div>
                            <div className="col-md-3">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/big-data7.png")} alt="Big Data" style={{width:"auto", height:"180px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Setor de Seguros</h5>
                                <p>Transformamos a forma como as seguradoras avaliam os riscos, prestam serviços de colisão e sinistros e gerenciam as relações com clientes, com a capacidade de analisar milhares de pontos de dados diariamente, a partir de cinco milhões de carros.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/big-data8.jpg")} alt="Big Data" style={{width:"auto", height:"180px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Setor Farmacêutico</h5>
                                <p>Construção de Data Pipeline para captura, integração, enriquecimento e orquestração de eventos para análises de negócio em tempo real</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;