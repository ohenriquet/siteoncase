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
                                    <img src={require("../../images/service-details/cloudera1.png")} alt="Cloudera" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12" style={{paddingLeft:"45px",paddingRight:"45px"}}>
                                <div className="services-details-desc">
                                    <h3>Aceleramos a inovação com Big Data</h3>
                                    <p>A Cloudera está revolucionando o gerenciamento de dados corporativos, oferecendo a primeira plataforma unificada para Big Data e Machine Learning, através do Enterprise Data Hub construído sobre o Apache Hadoop.</p>

                                    <p>Sua tecnologia oferece as empresas um local para armazenar, acessar, processar, proteger e analisar todos os seus dados, capacitando-os a ampliar o valor dos investimentos existentes enquanto possibilita novas maneiras fundamentais de obter valor de seus dados.</p>

                                    <p>Como <strong>parceiros oficiais da Cloudera</strong>, temos todo o know-how necessário para ajudar empresas a transformarem o seu negócio, adotando a tecnologia líder de mercado em gestão de dados.</p>
                                </div>
                            </div>

                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/cloudera2.png")} alt="Cloudera" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Experiência de Dados Compartilhada (SDX)</h6>
                            </div>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/cloudera3.png")} alt="Cloudera" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Desenvolvimento de Apps de Big Data</h6>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/cloudera4.png")} alt="Cloudera" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Integração com Infraestrutura Existente</h6>
                            </div>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/cloudera5.png")} alt="Cloudera" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Gestão e Upgrades de Clusters</h6>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:"2em"}}>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/cloudera6.png")} alt="Cloudera" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Automatização de Servidores & Bases de Dados</h6>
                            </div>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <img src={require("../../images/service-details/cloudera7.png")} alt="Cloudera" style={{width:"100px", height:"100px", marginBottom:"2em"}}/>
                                <h6>Apoio Técnico Especializado em Cloudera</h6>
                            </div>
                        </div>

                    </div>

                    <h3></h3>  

                    <div className="row align-items-center">
                        <h4>Por que a tecnologia Cloudera?</h4>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Enterprise Data Hub</h5>
                            <p>A Cloudera, pioneira no mercado de Big Data, fornece uma plataforma robusta que facilita o gerenciamento, monitoramento e a análise de grandes conjuntos de dados nas diversas variedades, velocidades (Extração e Processameto), tudo isso em um fluxo volume de dados elevado.</p>
                            <p>Sua moderna e fluida plataforma pode ajudar você a resolver esses problemas crônicos:</p>
                            <ul>
                                <li>Dados não confiáveis ou ausentes.</li>
                                <li>Sempre tentando recuperar o atraso e atender aos requisitos de negócios.</li>
                                <li>Uma variedade ímpar de produtos e serviços proprietários que exigem integração.</li>
                            </ul>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/cloudera8.png")} alt="Cloudera" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-4">
                            <img src={require("../../images/service-details/cloudera9.png")} alt="Cloudera" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8">
                            <h5>Extração de Todos os Tipos de Dados</h5>
                            <p>Nos últimos 10 anos produzimos mais dados do que desde os primórdios da humanidade até 2003 e a tendência é que esse crescimento seja exponencial a cada ano. De acordo com estudos, 80% do conteúdo produzido em uma empresa normal é em formato não estruturado e os 20% restante se dividem entre:</p>
                            <ul>
                                <li>Dados Estruturados</li>
                                <li>Dados Semi-Estruturados</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Prepare sua Estrutura e Reduza os Custos</h5>
                            <p>A cada dia que passa as cargas de trabalho para processamento de dados são maiores, acarretando um elevado custo de infraestrutura. Um dos beneficios da tecnologia de Big Data é poder migrar os dados para um hub de dados corporativo, onde são executadas em paralelo, a um custo muito baixo, e mais rápido do que antes.</p>
                            <p>A otimização do posicionamento dessas cargas de trabalho e dos dados nos quais elas operam libera capacidade em DW's, tornando-os mais valiosos ao permitir que eles se concentrem no OLAP crítico para os negócios e em outros aplicativos para os quais foram projetados.</p>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/cloudera10.png")} alt="Cloudera" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-4">
                            <img src={require("../../images/service-details/cloudera11.png")} alt="Cloudera" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8">
                            <h5>Distribuição Hadoop Open Source</h5>
                            <p>Atualmente, o CDH (Cloudera Distribution Hadoop) é a distribuição mais completa, testada e popular do Apache Hadoop e de projetos de código aberto relacionados no mercado de BDA, incluindo o Apache Impala e o Cloudera Search.</p>
                            <ul>
                                <li>O CDH fornece os elementos principais do Hadoop, juntamente com uma interface de usuário baseada na Web e recursos empresariais vitais.</li>
                                <li>É um software livre licenciado pela Apache e é a única solução do Hadoop que oferece processamento em lote unificado, SQL interativo e pesquisa interativa e controles de acesso baseados em função.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="services-details-overview">
                        <div className="row align-items-center" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                            <h4>Os melhores Especialistas em Tecnologia Cloudera</h4>
                        </div>
                        <div className="d-flex justify-content-center partner align-items-center" style={{display:"flex !important", alignItems:"center !important"}}>
                                <img src={require("../../images/service-details/cloudera12.png")} alt="Cloudera" style={{width:"auto", height:"200px", marginLeft:"0em", marginRight:"5em"}}/>
                                <p>Com a qualificação de <strong>Cloudera Official Partners</strong>, estamos habilitados pela maior distribuidora de Hadoop à ajudar empresas a monitorizar e analisar grandes volumes de informação com recursos da tecnologia Cloudera. <br></br>Decidimos utilizar o Hadoop como plataforma de referência pela sua flexibilidade, escalabilidade e benefícios na redução de custos para os clientes.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-section ptb-100"> 
                    <div className="row align-items-center" style={{marginLeft:"auto",marginRight:"auto",maxWidth:"1140px"}}>
                        <div className="col-6">
                            <h2 style={{color:"#FAFAFA", fontSize:"2.5rem"}}>Quer entender como podemos ajudar a sua empresa?</h2>
                        </div>
                        <div className="col-6 align-items-center" style={{textAlign:"center"}}>
                            <a href="/contato/" class="default-btn" style={{backgroundColor:"#53c8da",color:"#393953",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>FALE COM NOSSOS REPRESENTANTES<span></span></a>
                        </div>
                        
                    </div>

                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;