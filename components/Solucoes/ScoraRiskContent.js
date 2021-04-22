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
                                    <h3>Ganhe escala sem aumentar o risco</h3>
                                    <p>Controlar os riscos e fraudes das operações é cada vez mais importante entre as empresas financeiras. A quantidade de dados gerados torna o desafio de escalar ainda maior.</p>

                                    <p>A conformidade dos processos torna-se um desafio dinâmico com processos cada vez mais maleáveis para a empresa se adaptar.</p>

                                    <p>É necessário agir antecipadamente para detectar novas fraudes e riscos associados. A disponibilização de escores se torna essencial para os times, apresentando tanto análises textuais quanto visualizações e alertas.</p>
                                    
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-risk-1.jpg")} alt="Scora Risk" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-risk-2.jpg")} alt="Scora Risk" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <h5>Gerenciamento eficaz de riscos</h5>
                                <p>Monitoramento do ciclo de vida completo dos riscos através de visualizações de escores com base em riscos, detecção de fraude, atribuição de linhas, modelagem de risco de crédito, previsão de perdas e modelagem de eventos.</p>

                                <h5>Gerenciamento de conformidade</h5>
                                <p>Manutenção de conformidade e processos de negócios eficazes, reduzindo os riscos em áreas como meio ambiente, tecnologia verde e conformidade com o comércio internacional.</p>

                                <h5>Gerenciamento de fraudes</h5>
                                <p>Descoberta de novas tendências, esquemas fraudulentos e cenários.</p>

                                <h5>Gerenciamento de auditoria</h5>
                                <p>Gerenciando as auditorias internas com mais eficiência, alinhando-as mais perto dos negócios.</p>
                                <br>
                                </br>
                                <div className="others-options">
                                        <Link href="/analise-risco">
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