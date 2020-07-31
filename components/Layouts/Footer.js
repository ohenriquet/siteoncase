import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <React.Fragment>
                {/* Top Footer Section */}
                <footer className="footer-section ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Sobre Nós</h3>
                                    </div>
                                    <p>Somos parceiros na transformação digital das maiores organizações do Brasil e do mundo. Reunimos competências que combinam estratégias de Negócios e Tecnologia avançadas de Big Data, Business Intelligence, Analytics e Inteligência artificial para resolver problemas reais do mercado.</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Produtos</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="https://scora.ai/">
                                                <a>Scora</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://tarantulla.io/pt.html">
                                                <a>Tarantulla</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://oktopusapp.com/">
                                                <a>Oktopus</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://treinamentos.oncase.com.br/">
                                                <a>Treinamentos</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://toolkit.onca.se/">
                                                <a>Toolkit</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Soluções</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/big-data">
                                                <a>Big Data</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/business-intelligence-analytics">
                                                <a>BI e Analytics</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/inteligencia-artificial">
                                                <a>Inteligência Artificial</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/oncase-labs">
                                                <a>Oncase Labs</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Tecnologias</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/cloudera">
                                                <a>Cloudera</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/mongodb">
                                                <a>MongoDB</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Pentaho">
                                                <a>Pentaho</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                        </div>
                    </div>

                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                    <div className="partner-shape-img1">
                        <img src={require("../../images/shape/partnar-shape-2.png")} alt="image" />
                    </div>
                </footer>
                {/* End Top Footer Section */}

                {/* Bottom Footer Section */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p> 
                                    &copy; {currentYear} Oncase. Todos os direitos reservados.
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                            <ul className="footer-social">
                                        <li>
                                            <Link href="//www.facebook.com/oncasesolucoes/">
                                                <a>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="//www.youtube.com/c/OncaseBr">
                                                <a>
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="//www.instagram.com/oncasetecnologia/">
                                                <a>
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="//www.linkedin.com/company/oncase/">
                                                <a>
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="//twitter.com/oncase">
                                                <a>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Bottom Footer Section */}
            </React.Fragment>
        );
    }
}

export default Footer;