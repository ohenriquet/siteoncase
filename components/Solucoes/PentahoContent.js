import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100" style={{paddingBottom:"0px"}}>
            <div className="container" style={{paddingBottom:"50px"}}>
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/pentaho1.png")} alt="Pentaho" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12" style={{paddingLeft:"45px",paddingRight:"45px"}}>
                                <div className="services-details-desc">
                                    <h3>Aceleramos sua Integração de Dados</h3>
                                    <p>Com a experiência de mais de 8 anos como <strong>Parceiros Oficiais da Pentaho</strong> em toda a região LATAM, desenvolvemos projetos e casos de sucesso, que aplicam soluções de Integração de Dados (ETL), Big Data, criação de Dashboards e Portais corporativos, Otimização e Governaça em Data Warehouse e Soluções de Business Intelligence. O nosso objetivo é ajudar as organizações dos mais diversos setores a extrair valor dos seus dados.</p>

                                    <p>Com uma abordagem ágil e flexível, os nossos experts em tecnologia Pentaho podem ajudar durante todo o processo de implementação, formação e adaptação da ferramenta no seu negócio.</p>
                                    <ul>
                                    <li><a href="https://www.hitachivantara.com/en-us/products/big-data-integration-analytics/pentaho-trial-download.html?source=pentaho-redirect">Teste Gratuitamente</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/pentaho2.png")} alt="Pentaho" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Consultoria Especializada Pentaho</h6>
                            </div>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/pentaho3.png")} alt="Pentaho" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Otimização e Governança em DW / BI</h6>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/pentaho4.png")} alt="Pentaho" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Suporte Profissional Pentaho</h6>
                            </div>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/pentaho5.png")} alt="Pentaho" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Implementação de BI Embarcado</h6>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/pentaho6.png")} alt="Pentaho" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Desenvolvimento de Arquitetura de Dados</h6>
                            </div>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/pentaho7.png")} alt="Pentaho" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Capacitação Oficial Pentaho</h6>
                            </div>
                        </div>

                    </div>

                    <div className="row align-items-center">
                        <h4>Por que a tecnologia Pentaho?</h4>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Pentaho Data Integration</h5>
                            <p>Com o Pentaho Data Integration, você elimina a necessidade de codificação e complexidade da sua integração de dados. Com ferramentas visuais, o processo é feito de maneira "Drag and drop". Com o PDI, você prepara e combina dados, de qualquer fonte, para criar imagem completa da sua organização.</p>
                            <ul>
                                <li>O design gráfico de ETL simplifica a criação de pipelines de dados.</li>
                                <li>Biblioteca avançada de componentes pré-construídos para ajudar no acesso, preparação e mesclagem dos dados.</li>
                                <li>Poderosas capacidades de orquestração para coordenar e combinar transformações.</li>
                            </ul>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/pentaho8.png")} alt="Pentaho" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-4">
                            <img src={require("../../images/service-details/pentaho9.png")} alt="Pentaho" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8">
                        <h5>Big Data Integration</h5>
                            <p>O Pentaho Data Integration oferece funcionalidades de manipulação de dados ilimitada, permitindo aceder, preparar, integrar e enviar dados de uma vasta gama de fontes, como Hadoop, NoSQL, Bases de Dados Relacionais e Analíticas.</p>
                            <ul>
                                <li>Ferramentas visuais de integração de big data eliminam programação manual e scripts.</li>
                                <li>Alterne sem interrupções entre mecanismos de execução, como Apache Spark e Pentaho.</li>
                                <li>Suporte robusto para distribuições Hadoop, Spark e NoSQL.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Pentaho Business Analytics</h5>
                            <p>O Pentaho Bunisses Analytics simplifica a preparação, combinação de todos os dados a partir de qualquer fonte, dispondo de diversas ferramentas para análises, visualizações e relatórios.</p>
                            <ul>
                                <li>Soluções abrangentes para relatórios sobre quaisquer dados</li>
                                <li>Análise visual interativa e painéis</li>
                                <li>Capacidade de incorporar qualquer análise e gerenciar usuários em escala</li>
                            </ul>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/pentaho10.png")} alt="Pentaho" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-4">
                            <img src={require("../../images/service-details/pentaho11.png")} alt="Pentaho" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8">
                            <h5>Reporting Empresarial Completo</h5>
                            <p>O Pentaho Report Designer oferece painéis interativos aos usuários. Mostrando indicadores chaves de performance em uma interface gráfica</p>
                            <ul>
                                <li>Painel baseado na Web fornece navegação e uma biblioteca de controles de filtro</li>
                                <li>Painéis personalizados são adaptados aos seus requisitos de marca e de negócios</li>
                                <li>A integração de portal e mash-up conecta a análise a outros aplicativos</li>
                            </ul>
                        </div>
                    </div>


                    <div className="services-details-overview">
                        <div className="row align-items-center" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                            <h4>Os verdadeiros especialistas em Tecnologia Pentaho</h4>
                        </div>
                        <div className="d-flex justify-content-center partner align-items-center" style={{display:"flex !important", alignItems:"center !important"}}>
                                <img src={require("../../images/service-details/pentaho12.png")} alt="Pentaho" style={{width:"auto", marginLeft:"0em", marginRight:"5em"}}/>
                                <p>Como <strong>Parceiros e Formadores Oficiais Pentaho em toda a região LATAM</strong>, ajudamos organizações a reduzir o tempo de implementação de uma estratégia Data Analytics, utilizando software de open source, que possibilita a integração de outras tecnologias. <br></br>Em 2011, recebemos a distinção de “Channel Managers Pick for all LATAM” da Pentaho. Com projetos em todo o mundo e casos de sucesso em várias indústrias, a Oncase é reconhecida pelo seu conhecimento tecnológico e “Paixão pela Excelência”.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-section ptb-100"> 
                    <div className="row align-items-center" style={{marginLeft:"auto",marginRight:"auto",maxWidth:"1140px"}}>
                        <div className="col-6">
                            <h2 style={{color:"#FAFAFA", fontSize:"2.5rem"}}>Quer entender como podemos ajudar a sua empresa?</h2>
                        </div>
                        <div className="col-6 align-items-center" style={{textAlign:"center"}}>
                            <a href="/contact/" class="default-btn" style={{backgroundColor:"#53c8da",color:"#393953",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>FALE COM NOSSOS REPRESENTANTES<span></span></a>
                        </div>
                        
                    </div>

                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;