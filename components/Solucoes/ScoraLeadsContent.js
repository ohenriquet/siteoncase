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
                                <h3>Encontre os compradores certos para o seu produto</h3>
                                <p>E se você pudesse direcionar o trabalho da sua equipe comercial para <i>leads</i> com maior probabilidade de comprar o seu produto? O <strong>Scora Leads</strong> busca, classifica e qualifica os <i>leads</i> que tem maior <i>fit</i> com o seu produto.</p>

                                <p>Isso diminui drasticamente o tempo perdido da sua equipe de vendas com ligações e reuniões que não vão a lugar algum. Os vendedores direcionam os esforços para os negócios que têm maior probabilidade de fechar negócio e se satisfazer com o produto.</p>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-leads-1.jpg")} alt="iScora Leads" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/scora-leads-2.jpg")} alt="Scora Leads" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <h4>Mais do que vender, encontramos clientes que irão se beneficiar com o seu produto</h4>
                                <p>Não basta realizar a venda. O bem mais valioso de uma empresa é a sua reputação, e um cliente insatisfeito pode prejudicá-la. Por isso o <strong>Scora Leads</strong> encontra clientes com o perfil que de verdade irão se beneficiar com o seu produto, e por consequência aumentando o <i>customer success</i>.</p>
                                <p></p>
                                <br>
                                </br>
                                <div className="others-options">
                                        <Link href="/classificacao-leads">
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