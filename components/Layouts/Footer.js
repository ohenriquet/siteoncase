import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <React.Fragment>
                {/* Top Footer Section */}
                <footer className="footer-section ptb-100" style={{paddingBottom:"50px",paddingTop:"65px"}}>
                    <div className="container">
                       <div class="row pt-4 mb-4 mb-lg-5">
                            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                <img class="mb-3" src={require("../../images/logo-white.png")} width="175" />
                                <div class="mt-3 d-none d-lg-block">
                                    <p  style={{color:"#f8f9fa"}}>Somos parceiros na transformação digital das maiores organizações do Brasil e do mundo. Reunimos competências que combinam estratégias de Negócios e Tecnologia avançadas de Big Data, Business Intelligence, Analytics e Inteligência artificial para resolver problemas reais do mercado.</p>
                                </div>
                                <div class="mt-3 d-none d-lg-block">
                                    <a class="transparent-link mr-2" href="//www.facebook.com/oncasesolucoes/"><i className="fab fa-facebook" style={{color:"#d9d3d3"}}></i></a>
                                    <a class="transparent-link mr-2" href="//www.youtube.com/c/OncaseBr"><i className="fab fa-youtube" style={{color:"#d9d3d3"}}></i></a>
                                    <a class="transparent-link mr-2" href="//www.instagram.com/oncasetecnologia/"><i className="fab fa-instagram" style={{color:"#d9d3d3"}}></i></a>
                                    <a class="transparent-link mr-2" href="//www.linkedin.com/company/oncase/"><i className="fab fa-linkedin" style={{color:"#d9d3d3"}}></i></a>
                                    <a class="transparent-link mr-2" href="//twitter.com/oncase"><i className="fab fa-twitter" style={{color:"#d9d3d3"}}></i></a>
                                </div>
                                <div class="border-top mt-3 d-lg-none"></div>
                            </div>

                            <div class="col-6 col-lg-2">
                                <h4 style={{color:"#f8f9fa"}}>Produtos</h4>
                                <div class="mb-1"><a class="text-light" href="https://scora.ai/"><span>Scora</span></a></div>
                                <div class="mb-1"><a class="text-light" href="https://tarantulla.io/pt.html"><span>Tarantulla</span></a></div>
                                <div class="mb-1"><a class="text-light" href="https://oktopusapp.com/"><span>Oktopus</span></a></div>
                                <div class="mb-1"><a class="text-light" href="https://treinamentos.oncase.com.br/"><span>Treinamentos</span></a></div>
                                <div class="mb-1"><a class="text-light" href="https://toolkit.onca.se/"><span>Toolkit</span></a></div>
                            </div>
                            <div class="col-6 col-lg-2">
                                <h4 style={{color:"#f8f9fa"}}>Soluções</h4>
                                <div class="mb-1"><a class="text-light" href="/big-data"><span>Big Data</span></a></div>
                                <div class="mb-1"><a class="text-light" href="/business-intelligence-analytics"><span>BI e Analytics</span></a></div>
                                <div class="mb-1"><a class="text-light" href="/inteligencia-artificial"><span>Inteligência Artificial</span></a></div>
                                <div class="mb-1"><a class="text-light" href="/oncase-labs"><span>Oncase Labs</span></a></div>
                            </div>
                            <div class="col-6 col-lg-2">
                                <h4 style={{color:"#f8f9fa"}}>Tecnologias</h4>
                                <div class="mb-1"><a class="text-light" href="/cloudera"><span>Cloudera</span></a></div>
                                <div class="mb-1"><a class="text-light" href="/mongodb"><span>MongoDB</span></a></div>
                                <div class="mb-1"><a class="text-light" href="/Pentaho"><span>Pentaho</span></a></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <div class="small mb-2 mb-lg-0"><span class="text-muted mr-5">&copy; {currentYear} Oncase. Todos os direitos reservados.</span></div>
                            </div>
                        </div>
                    </div>

                  
                </footer>
                {/* End Top Footer Section */}

            </React.Fragment>
        );
    }
}

export default Footer;