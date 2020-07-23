import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Conheça nossas soluções</h2>
                        <spam>A solução Scora pode ser aplicada em diferentes necessidades</spam>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-big-data"></i>
                                </div>

                                <h3>Previsão de demanda</h3>
                                <p>Analise quais ativos terão mais procura do mercado em um futuro próximo ou distante, e planeje o seu estoque ou catálogo de produtos de forma inteligente.</p>

                                <Link href="/scora-demmand">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-data-analytics"></i>
                                </div>

                                <h3>Manutenção preditiva</h3>
                                <p>Monitore todas as variáveis relacionadas com a manutenção dos seus equipamentos para fazer as manutenções inteligentes e otimizar os custos.</p>

                                <Link href="/scora-maintenance">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/* <div class="w-100"></div> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-document"></i>
                                </div>
                                <h3>Análise de risco</h3>
                                <p>Use inteligência artificial para analisar contratos e documentos e receba indicaçõs de possíveis riscos relacionados com as atividades.</p>

                                <Link href="/scora-risk">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-chart"></i>
                                </div>
                                <h3>Classificação de leads</h3>
                                <p>Identifique leads que possuem fit com o seu produto e otimize os esforços da equipe de vendas, aumentando a receita sem aumentar a equipe.</p>

                                <Link href="/scora-leads">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-science"></i>
                                </div>
                                <h3>Jornada do cliente</h3>
                                <p>Aprimore a experiência dos seus clientes identificando os pontos de contato que precisam de melhoria, receba insights e monitore o impacto das alterações.</p>

                                <Link href="/scora-journey">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-data-management"></i>
                                </div>
                                <h3>Identificação de fraudes</h3>
                                <p>Analise contratos e documentações através da identificação de padrões e receba indicações de prováveis tentativas de fraudes.</p>

                                <Link href="/service-details">
                                    <a className="service-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
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