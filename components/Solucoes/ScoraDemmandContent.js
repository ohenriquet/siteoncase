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
                                    <h3>E se você pudesse prever a demanda dos seus clientes?</h3>
                                    <p>E se você pudesse prever a quantidade de compras que irão ocorrer? Não se pode ter certeza absoluta, mas podemos reduzir o risco para você tomar decisões orientadas a dados.</p>

                                    <p>Nem sempre podemos olhar apenas para o retrovisor para entender os padrões de compra, mas também usar variáveis externas e começar a alertar sobre possíveis tendências.</p>

                                    <p>Focamos em resultados e não necessariamente em modelos sofisticados. Muitas vezes isto é alcançado com bons dados. Precisamos agregar nossos dados externos e dados externos para começar a entender os padrões.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-demmand-1.jpg")} alt="Scora Demmand" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-demmand-2.jpg")} alt="Scora Demmand" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Aplicando inteligência artificial no seu modelo de negócio</h3>
                                    <p>Quando necessário, usamos os modelos mais avançados de previsão de demanda e alertamos as interrupções que precisarão calibrar os modelos. Tanto para preço quanto para quantidade de demanda ao longo do tempo</p>

                                    <p>Queremos que a sua empresa comece bem a sua cadeia de suprimento. Tanto para compras governamentais, quanto para previsão de como a chuva pode impactar o preço de um imóvel, o <strong>Scora Demmand</strong> está preparado para atender as previsões e padrões de compras.</p>
                                </div>
                                <br>
                                </br>
                                <div className="others-options">
                                        <Link href="/previsao-demanda">
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