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
                                        <h3>Soluções</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/scora-demmand">
                                                <a>Scora Demmand</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/scora-maintenance">
                                                <a>Scora Maintenance</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="scora-risk">
                                                <a>Scora Risk</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/scora-leads">
                                                <a>Scora Leads</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/scora-journey">
                                                <a>Scora Journey</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Aplicações</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/previsao-demanda">
                                                <a>Previsão de demanda</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/manutencao-preditiva">
                                                <a>Manutenção preditiva</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/analise-risco">
                                                <a>Análise de risco</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/classificacao-leads">
                                                <a>Classificação de leads</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/jornada-cliente">
                                                <a>Jornada do cliente</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Links importantes</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="//oncase.com.br/">
                                                <a>Site Oncase</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="//blog.oncase.com.br/">
                                                <a>Blog Oncase</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="//treinamentos.oncase.com.br/">
                                                <a>Treinamentos Oncase</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="//toolkit.onca.se/">
                                                <a>Oncase Toolkit</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="//www.youtube.com/c/OncaseBr">
                                                <a>Oncase TV</a>
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
                                    &copy; {currentYear} Scora. Todos os direitos reservados por 

                                    <a href="//oncase.com.br/" target="_blank">
                                        Oncase
                                    </a>
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