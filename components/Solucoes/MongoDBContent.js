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
                                    <h3>Elevamos Big Data Analytics para novos patamares</h3>
                                    <p>Como parceiros da MongoDB, já realizamos projetos para empresas de vários segmentos em todo o Brasil. Nossa consultoria atende todos os aspectos do MongoDB, desde arquitetura, schema design, implementação de sharding, alta disponibilidade com replica set, segurança, performance e manutenção.</p>

                                    <p>Temos todo know-how de arquitetura, infraestrutura e desenvolvimento e condições para validar sua aplicação sob todos os ângulos, pensando em escalabilidade, alta disponibilidade, segurança e crescimento a longo prazo.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/mongo1.png")} alt="MongoDB"  style={{width:"auto",height:"400px", marginLeft:"0em", marginRight:"0em"}} />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{display:"flex !important"}}>
                                <img src={require("../../images/service-details/mongo2.png")} alt="MongoDB" style={{width:"50px", height:"50px", marginRight:"2em"}}/>
                                <h6>Implementação de MongoDB</h6>
                            </div>
                            <div className="col-6" style={{display:"flex !important"}}>
                                <img src={require("../../images/service-details/mongo3.png")} alt="MongoDB" style={{width:"50px", height:"50px", marginRight:"2em"}}/>
                                <h6>Desenvolvimento de Apps de Big Data</h6>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{display:"flex !important"}}>
                                <img src={require("../../images/service-details/mongo4.png")} alt="MongoDB" style={{width:"50px", height:"50px", marginRight:"2em"}}/>
                                <h6>Gestão de Clusters & Upgrades</h6>
                            </div>
                            <div className="col-6" style={{display:"flex !important"}}>
                                <img src={require("../../images/service-details/mongo5.png")} alt="MongoDB" style={{width:"50px", height:"50px", marginRight:"2em"}}/>
                                <h6>Analytics & Data Mining</h6>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{display:"flex !important"}}>
                                <img src={require("../../images/service-details/mongo6.png")} alt="MongoDB" style={{width:"50px", height:"50px", marginRight:"2em"}}/>
                                <h6>Configuração, Design & Integração</h6>
                            </div>
                            <div className="col-6" style={{display:"flex !important"}}>
                                <img src={require("../../images/service-details/mongo7.png")} alt="MongoDB" style={{width:"50px", height:"50px", marginRight:"2em"}}/>
                                <h6>Formação Oficial em MongoDB</h6>
                            </div>
                        </div>

                    </div>

                    <h3></h3>  

                    <div className="row align-items-center">
                        <h4>Por que a tecnologia MongoDB?</h4>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Auto-sharding para Maior Escalabilidade</h5>
                            <p>Com auto-sharding, uma plataforma MongoDB pode escalar de um servidor único para grandes sistemas multi-rack. Esta funcionalidade resolve o problema de escalabilidade horizontal, permitindo adicionar mais servidores para suportar o crescimento dos dados.</p>
                            <p>A tecnologia MongoDB também oferece conectores para as frameworks e linguagens de programação mais populares para tornar o desenvolvimento num processo mais simples.</p>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/mongo8.png")} alt="MongoDB" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-4">
                            <img src={require("../../images/service-details/mongo9.png")} alt="MongoDB" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8">
                            <h5>Dynamic Schemas</h5>
                            <p>É comum que documentos de uma coleção tenham uma estrutura semelhante, contudo, com o Dynamic Schemas do MongoDB é possível criar coleções sem definir a sua estrutura. Com esta tecnologia pode alterar a estrutura dos documentos, adicionando novos campos ou eliminando campos já existentes.</p>
                            <p>Os documentos de uma coleção já não têm necessariamente de ter um conjunto de campos idênticos, o que simplifica e facilita a iteratividade do desenvolvimento de software utilizando a tecnologia MongoDB.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Replicação & Alta Disponibilidade</h5>
                            <p>O MongoDB tem uma funcionalidade de replicação, o que significa ter o mesmo conjunto de dados em diferentes nós para o caso de algum deles ficar em baixo ter sempre outro à disposição. A replicação fornece redundância (mantém as cópias de dados), alta disponibilidade, diminuição da carga de leitura e distribuição dos dados de forma geolocalizada.</p>
                            <p>Múltiplas cópias de informação em diferentes servidores aumentam a segurança e disponibilidade de dados nas aplicações distribuídas, fornecendo um nível de tolerância a falhas contra a perda de um único servidor.</p>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/mongo10.png")} alt="MongoDB" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-4">
                            <img src={require("../../images/service-details/mongo11.png")} alt="MongoDB" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8">
                            <h5>Framework de Agregação & Map Reduce</h5>
                            <p>Para queries complexas onde o operador de find não é suficiente, o MongoDB disponibiliza uma framework de processamento que permite a construção de pipelines de operações e filtros potenciando as vantagens de um ambiente partilhado: a framework de agregação.</p>
                            <ul>
                                <li>A tecnologia MongoDB oferece também a possibilidade de correr Map Reduce.</li>
                                <li>Todas as funções de Map Reduce são em JavaScript e passíveis de serem executadas em MongoDB.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Open Source & Open Standards</h5>
                            <p>O MongoDB é o banco de dados NoSQL open source mais utilizada em todo o mundo.</p>
                            <p>Esta tecnologia vêm reinventando a gestão de dados, afirmando-se como uma das principais soluções de Big Data presentes no mercado.</p>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/mongo12.png")} alt="MongoDB" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>


                    <div className="services-details-overview">
                        <div className="row align-items-center" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                            <h4>Os verdadeiros especialistas em Tecnologia MongoDB e NoSQL</h4>
                        </div>
                        <div className="d-flex justify-content-center partner align-items-center" style={{display:"flex !important", maxWidth:"900px", alignItems:"center !important"}}>
                                <img src={require("../../images/service-details/mongo13.png")} alt="MongoDB" style={{width:"auto", height:"125px", marginLeft:"0em", marginRight:"5em"}}/>
                                <p>Com a qualificação de <strong>MongoDB Partner</strong>, somos o parceiro de referência para a implementação e gestão deste tipo de soluções. Com clientes espalhados um pouco por todo o mundo, criamos soluções à medida com recurso à ferramenta líder na categoria de Bases de Dados NoSQL.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;