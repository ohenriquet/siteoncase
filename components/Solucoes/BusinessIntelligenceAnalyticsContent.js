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
                                    <h3>Da análise descritiva para a análise preditiva</h3>
                                    <p>Dados brutos não viram insights em um passe de mágica. A tomada de decisão é um processo complexo e que depende de vários fatores, e as ferramentas de BI e outras tecnologias de Big Data Analytics são importantes para que os profissionais da equipe possam transformar tudo o que foi recolhido em informações e conhecimentos relevantes para o negócio de forma rápida.</p>

                                    <p>Como Parceiros Oficiais Pentaho – plataforma open source com uma forte componente de integração Big Data e uma grande capacidade de customização – e nosso vasto conhecimento em várias indústrias, tornamos possíveis análises preditivas, prescritivas e descritivas que ajudam a responder, em altíssimo nível de complexidade e granularidade, perguntas como: “o que aconteceu?”; “quando aconteceu?”; “o que acontecerá?”; “quando acontecerá?”; “o que eu devo fazer?”; “quando eu devo fazer?”.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/business-intelligence-analytics1.png")} alt="Business Intelligence Analytics" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <h4>Como Podemos Te Ajudar?</h4>
                        </div>
                        <div className="row vertical-align-center">
                            <div className="col-md-3">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/business-intelligence-analytics2.jpg")} alt="Business Intelligence Analytics" style={{width:"auto", height:"200px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Integração de Dados</h5>
                                <p>Coletamos, higienizamos, enriquecemos e orquestramos quaisquer tipos de dados, sem limitações de origem e tamanho. Criamos e implementamos processos de ETL para transformar seus dados em informações estratégicas.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/business-intelligence-analytics3.jpg")} alt="Business Intelligence Analytics" style={{width:"auto", height:"200px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Visualização de Dados</h5>
                                <p>Combinamos a nossa experiência técnica em Business Intelligence e Analytics com uma equipe dedicada responsável pelo design e experiência visual dos nosso clientes, para entregar a solução ideal para o seus desafios de negócio.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/business-intelligence-analytics4.jpg")} alt="Business Intelligence Analytics" style={{width:"auto", height:"200px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Advanced Analytics</h5>
                                <p>Somos capazes de proporcionar para sua empresa um ambiente end-to-end, utilizamos técnicas avançadas de Analytics e Inteligencia Artificial para aumentar suas capacidades preditivas, Análise de previsão, otimização e simulação.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/business-intelligence-analytics5.jpg")} alt="Business Intelligence Analytics" style={{width:"auto", height:"200px", marginleft:"0em", marginright:"0em"}}/>
                                </div>
                                <h5>Formação Profissional</h5>
                                <p>Através de nosso Portfólio de Educação, difundimos nosso conhecimento e experiência adquirida no dia-a-dia em projetos de Business Intelligence, Analytics e Big Data. Contamos com cursos e workshops nas modalidades online e presencial.</p>
                            </div>

                        </div>
                    </div>   

                    <div className="row align-items-center">
                        <h4>Aplicações da tecnologia</h4>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Acelerando o seu Pipeline de Dados</h5>
                            <p>Vivemos em um mundo onde apensas 1% do universo de dados é de fato analisado. Isso se deve ao grande volume e a complexidade das transformações desses dados, principalmente os não-estruturados.</p>
                            <p>Atravès do uso de ferramentas líderes de mercado como o Pentaho Data Integration, produtos e metodologias proprietarias, construímos Data pipelines de forma visual e intuitiva, abrangendo desde a Captura, ETL, streaming em tempo real a orquestração.</p>
                            <ul>
                                <li>Captação</li>
                                <li>Higienização</li>
                                <li>Enriquecimento</li>
                                <li>Orquestração</li>
                            </ul>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/business-intelligence-analytics6.png")} alt="Business Intelligence Analytics" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-4">
                            <img src={require("../../images/service-details/business-intelligence-analytics7.png")} alt="Business Intelligence Analytics" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8">
                            <h5>Portais de Inteligência Analítica</h5>
                            <p>Construir um Portal de Analytics para multiplus usuários não é uma tarefa simples, os utilizadores precisam que o Portal seja intuitivo e que torne o processo de análise mais ágil.</p>
                            <p>Para garantir que a informação seja apresentada de forma cuidadosa é necessário encontrar componentes de visualização bastante específicos, que poderão necessitar muitas vezes de uma personalização.</p>
                            <p>Somos especializados em soluções de Co-criação e Desenvolvimento de Produtos Analíticos. O nosso segredo é uma metodologia proprietária e uma equipe multidisciplinar composta por experts em engenharia de dados, Arquitetura de Dados, Cientista de Dados, UX Designer, Analista de Negócios e Gerente de Produtos.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8">
                            <h5>Manutenção Preditiva</h5>
                            <p>A indústria 4.0 propõe às empresas a utilização de tecnologia para o acesso e a gestão de quantidades cada vez maiores e mais confiáveis de dados da sua produção, o que apresenta oportunidades para aplicação de serviços industriais mais eficientes.</p>
                            <p>Um dos grandes pontos de aplicação de tecnologia pode ser na utilização de dados para redução de falhas nas linhas de produção. Os modelos de manutenção preditiva visam o acompanhamento periódico do funcionamento das máquinas, equipamentos e peças de um fábrica, no intuito de detectar as falhas antes que elas ocorram e prevenir interrupções na linha de produção. Como sabemos as paradas não planejadas no equipamentos consomem os tempo e produtividade de linhas de produção.</p>
                            <p>Os modelos de acompanhamento podem ser implementados desde a modelagem de probabilidades de falhas para máquinas monitoradas e alertas em tempo real. Assim como manutenção preventiva baseada em fatores históricos reduzindo os custos decorrentes da manutenção corretiva.</p>
                        </div>
                        <div className="col md-4">
                            <img src={require("../../images/service-details/business-intelligence-analytics8.png")} alt="Business Intelligence Analytics" style={{width:"auto", height:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>


                    <div className="services-details-overview">
                        <div className="row align-items-center" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                            <h4>Casos de sucesso com soluções de Business Intelligence e Analytics</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/business-intelligence-analytics9.jpg")} alt="Business Intelligence Analytics" style={{width:"auto", height:"200px", marginLeft:"0em", marginRight:"0em",borderRadius:"10px",marginBottom:"20px"}}/>
                                </div>
                                <h5>Mondelez</h5>
                                <p>Solução para integrar informação da cadeia de distribuição. A Solução criada permite reduzir o esforço necessário para monitorar e garantir a qualidade de estoque de forma paramétrica e dinâmica.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/business-intelligence-analytics10.jpg")} alt="Business Intelligence Analytics" style={{width:"auto", height:"200px", marginLeft:"0em", marginRight:"0em",borderRadius:"10px",marginBottom:"20px"}}/>
                                </div>
                                <h5>CAERN</h5>
                                <p>Uma porção significativa dos ativos das empresas são perdidos por questões de fraude. Grandes empresas acabam se associando a grupos fraudulentos por desconhecerem relacionamentos ocultos, informações sobre irregularidades, históricos de comportamento.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/business-intelligence-analytics11.jpg")} alt="Business Intelligence Analytics" style={{width:"auto", height:"200px", marginLeft:"0em", marginRight:"0em",borderRadius:"10px",marginBottom:"20px"}}/>
                                </div>
                                <h5>Close up</h5>
                                <p>O Portal de Transparência Municipal permite explorar mais de 100 indicadores de performance em mais de 308 municípios portugueses, recolhendo dados de diferentes bases de dados públicas e publicando-as de forma simples e acessível para cada cidadão.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;