import React, { Component } from 'react';

class GetStartedProject extends Component {
    render() {
        return (
            <section className="productive-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="productive-content">
                                <h3>Vamos otimizar o seu modelo de negócio</h3>
                                <p>A plataforma Scora pode ajudar a otimizar vitualmente qualquer vertical de negócio. Do ramo hospitalar ao varejo, de serviços financeiros à educação.
                                O Scora pode diminuir os gastos, aumentar a conversão e extrair o potencial máximo do seu modelo de negócio.</p>

                                <div className="productive-btn">
                                    <a className="productive-btn" href="/contact">
                                        Entre em contato
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="productive-image">
                                <img src={require("../../images/productive.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GetStartedProject;