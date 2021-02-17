import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <React.Fragment>
                {/* Top Footer Section */}
                    <div className="footer-topo"></div>
                <footer className="footer-section ptb-100" style={{paddingBottom:"50px",paddingTop:"65px"}}>
                    <div className="container" style={{backgroundImage:"url(../../images/home/Footer.png)"}}>
                       <div className="row pt-4 mb-4 mb-lg-5">
                            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                <img className="mb-3" src={require("../../images/logo-white.png")} width="175" />
                                <div className="mt-3 d-none d-lg-block">
                                    <p  style={{color:"#f8f9fa"}}>Somos parceiros na transformação digital das maiores organizações do Brasil e do mundo. Reunimos competências que combinam estratégias de Negócios e Tecnologia avançadas de Big Data, Business Intelligence, Analytics e Inteligência artificial para resolver problemas reais do mercado.</p>
                                </div>
                                <div className="mt-3 d-none d-lg-block">
                                    <a className="transparent-link mr-2" href="//www.facebook.com/oncasesolucoes/"><i className="fab fa-facebook" style={{color:"#d9d3d3"}}></i></a>
                                    <a className="transparent-link mr-2" href="//www.youtube.com/c/OncaseBr"><i className="fab fa-youtube" style={{color:"#d9d3d3"}}></i></a>
                                    <a className="transparent-link mr-2" href="//www.instagram.com/oncasetecnologia/"><i className="fab fa-instagram" style={{color:"#d9d3d3"}}></i></a>
                                    <a className="transparent-link mr-2" href="//www.linkedin.com/company/oncase/"><i className="fab fa-linkedin" style={{color:"#d9d3d3"}}></i></a>
                                    <a className="transparent-link mr-2" href="//twitter.com/oncase"><i className="fab fa-twitter" style={{color:"#d9d3d3"}}></i></a>
                                    <Link href="https://blog.oncase.com.br"><a className="text-light">Blog</a></Link>
                                </div>
                                <div className="border-top mt-3 d-lg-none"></div>
                            </div>

                            <div className="col-6 col-lg-3">
                                <h4 style={{color:"#f8f9fa"}}>Soluções</h4>
                                {/* <div className="mb-1"><a className="text-light" href="/plataforma"><span>Plataforma</span></a></div> */}
                                <div className="mb-1"><Link href="/oncase-labs"><a className="text-light"><span>Cocriação</span></a></Link></div>
                                <div className="mb-1"><Link href="/scora-journey"><a className="text-light"><span>Jornada do Cliente</span></a></Link></div>

                                {/* <div className="mb-1"><a className="text-light" href="/oncase-labs"><span>Cocriação</span></a></div>
                                <div className="mb-1"><a className="text-light" href="/scora-journey"><span>Jornada do Cliente</span></a></div> */}
                                {/* <div className="mb-1"><a className="text-light" href="/scora-acqua"><span>Saneamento</span></a></div>
                                <div className="mb-1"><a className="text-light" href="/scora-demand"><span>Previsão de Demanda</span></a></div> */}
                            </div>
                            {/* <div className="col-6 col-lg-2">
                                <h4 style={{color:"#f8f9fa"}}>Soluções</h4>
                                <div className="mb-1"><a className="text-light" href="/big-data"><span>Tarantulla</span></a></div>
                                <div className="mb-1"><a className="text-light" href="/business-intelligence-analytics"><span>Oktopus</span></a></div>
                                <div className="mb-1"><a className="text-light" href="/inteligencia-artificial"><span>Inteligência Artificial</span></a></div>
                                <div className="mb-1"><a className="text-light" href="/oncase-labs"><span>Oncase Labs</span></a></div>
                            </div> */}
                            <div className="col-6 col-lg-3">
                                <h4 style={{color:"#f8f9fa"}}>Tecnologias</h4>
                                <div className="mb-1"><Link href="/cloudera"><a className="text-light"><span>Cloudera</span></a></Link></div>
                                <div className="mb-1"><Link href="/mongodb"><a className="text-light"><span>MongoDB</span></a></Link></div>
                                <div className="mb-1"><Link href="/pentaho"><a className="text-light"><span>Pentaho</span></a></Link></div>
                                {/* <div className="mb-1"><a className="text-light" href="/cloudera"><span>Cloudera</span></a></div>
                                <div className="mb-1"><a className="text-light" href="/mongodb"><span>MongoDB</span></a></div>
                                <div className="mb-1"><a className="text-light" href="/Pentaho"><span>Pentaho</span></a></div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="small mb-2 mb-lg-0"><span className="text-muted mr-5">&copy; {currentYear} Oncase. Todos os direitos reservados.</span></div>
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