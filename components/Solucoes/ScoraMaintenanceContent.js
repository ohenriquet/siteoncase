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
                                    <h3>Manutenção Preditiva</h3>
                                    <p>O módulo Maintenance sugere a manutenção dos ativos com base na análise dos dados de desempenho, possibilitando a redução de perdas de desempenho, o que aumenta o retorno financeiro sobre as trocas, e otimiza os gastos.</p>

                                    <div className="features-text">
                                        <p>Junto com as sugestões de manutenção, o <strong>Scora Maintenance</strong> entrega um ranking dos ativos junto com o payback esperado de acordo com o investimento planejado. O acompanhamento pode ser feito através de geolocalização, com a funcionaliadade de incluir áreas prioritárias.</p>
                                    </div>

                                    <div className="features-text">
                                        <p>Analise o rendimento e a curva de degradação dos seus equipamentos por região/localidade. Após uma manutenção ou substituição de equipamneto, tenha análises individuais com monitoramento dos resultados. Tenha também uma projeção do incremento do faturamento após realizadas as manutenções.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-maintenance-1.jpg")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-maintenance-2.jpg")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Extraia o maior potencial dos seus ativos</h3>
                                    <p>Ao antecipar as manutenções antes dos equipamentos pararem, o <strong>Scora Maintenance</strong> extende o uptime e aumenta a produtividade da empresa. Produza mais gastando menos com a mesma quantidade de equipamentos.</p>

                                    <div className="features-text">
                                        <h4>Sem opiniões, só dados</h4>
                                        <p>O foco do <strong>Scora Maintenance</strong> é trazer dados para apoiar a tomada de decisões. Chega de fazer manutenções porque alguém acha que precisa fazer. A bissa solução se basea em dados de desempenho e funcionamento para pontar os melhores momentos para fazer uma intervenção.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Monitore os resultados</h4>
                                        <p>Depois de feita uma manutenção programada, o <strong>Scora Maintenance</strong> dá mais foco aos ativos que foram mexidos para te mostrar os resultados da intervenção feita. Assim você pode monitorar de perto o impacto das suas decisões de manutenção.</p>
                                    </div>
                                </div>
                                <br>
                                </br>
                                <div className="others-options">
                                        <Link href="/manutencao-preditiva">
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