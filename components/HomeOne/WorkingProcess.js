import React, { Component } from 'react';
import Link from 'next/link';

class WorkingProcess extends Component {
    render() {
        return (
            <section className="process-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Como funciona</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="process-item">
                                <img src={require("../../images/process/process1.png")} alt="image" />
                
                                <h3>Integração</h3>
                                <p>O Scora se integra com dados internos e externos e gera um scoring baseado em machine learning</p>
                        
                                <Link href="/sobre-nos">
                                    <a className="process-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="process-item">
                                <img src={require("../../images/process/process2.png")} alt="image" />
                
                                <h3>Visualização</h3>
                                <p>Personalizamos as visualizações sob medida com as suas necessidades, com regras customizadas</p>
                        
                                <Link href="/sobre-nos">
                                    <a className="process-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="process-item">
                                <img src={require("../../images/process/process3.png")} alt="image" />
                
                                <h3>Automação</h3>
                                <p>A tomada de decisões é automatizada baseada em regras inteligentes de workflow</p>
                        
                                <Link href="/sobre-nos">
                                    <a className="process-btn">
                                        Saiba mais
                                        <i className="flaticon-right"></i>
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

export default WorkingProcess;