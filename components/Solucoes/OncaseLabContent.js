import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100"  style={{paddingBottom:"0px"}}>
                <div className="container">
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc" style={{paddingRight:'80px'}}>
                                    <h3>Ajudamos a transformar seus dados em oportunidades de negócio!</h3>
                                    <p>Somos especializados em soluções de Co-criação e Desenvolvimento de Produtos Analíticos, Sistemas de Predição ou Prescrição sob medida.</p>

                                    <p>O nosso segredo é uma metodologia proprietária e uma equipe multidisciplinar composta por experts em engenharia de dados, Arquitetura de Dados, Ciência de Dados, UX Design, Analise de Negócios e Gestão de Produtos.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/cocriacao/cocriacao-infografico.png")} alt="Cocriação" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col lg-6">
                        <div className="row align-items-center">
                        <h4>Como funciona a cocriação?</h4>
                        <p>Trabalhamos com a metodologia proprietária ACHA, que é divida em 4 etapas, que pode durar de 6 meses à 12 meses, de acordo com o nível de maturidade e necessidade da sua empresa.</p>
                        </div>
                    </div>
                    <br></br>
                    <div className="row align-items-center">
                        <h4>1. Assessment</h4>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8" style={{paddingRight:'120px'}}>
                        <p><strong>Como Funciona:</strong><br></br>
                            Definimos as oportunidade de negócio por meio de entrevistas, dinâmicas e análises in loco para construir, a quatro mãos, um protótipo de produto analítico para atender os desafios desde o ínicio do projeto.
                        </p>
                        <p><strong>Duração da Fase:</strong><br></br>
                        Cerca de 1 mês
                        </p>
                        <p><strong>O que será entregue no Assessment:</strong>
                        </p>
                        <ul>
                        <li>Avaliação de oportunidades</li>
                        <li>Protótipo de Solução</li>
                        <li>Roadmap de evolução</li>
                        </ul>
                        </div>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/cocriacao/cocriacao-ilustracao1.png")} alt="Oncase Labs" style={{width:"auto", maxHeight:"400px", marginLeft:"0em", marginRight:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/cocriacao/cocriacao-ilustracao2.png")} alt="Oncase Labs" style={{width:"auto", maxHeight:"400px", marginLeft:"0em", marginRight:"0em"}}/>
                        </div>
                        <div className="col md-8" style={{paddingLeft:'120px'}}>
                            <h5>2. Carry Out</h5>
                            <p><strong>Como Funciona:</strong><br></br>
                                Etapa de desenvolvimento de funcionalidades do produto analítico através de um processo gradual de evolução, enriquecimento e transformação dos dados, o cliente participa de
                                maneria colaborativa nas validações das hipóteses de negócio.
                            </p>
                            <p><strong>Duração da Fase:</strong><br></br>
                                De acordo com o tamanho e complexidade do produto, geralmente de 3 a 6 meses.
                            </p>
                            <p><strong>O que será feito no Carry Out:</strong>
                            </p>
                            <ul>
                                <li>Agile sprints de duas semanas (9 dias úteis)</li>
                                <li>Time multidisciplinar Oncase + cliente</li>
                                <li>Evolução contínua de novas funcionalidades</li>
                                <li>Cerimônia de entrega a cada sprint</li>
                                <li>Documentação completa do produto e suas funcionalidades</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col md-8" style={{paddingRight:'120px'}}>
                            <h5>3. Hand-over</h5>
                            <p><strong>Como Funciona:</strong><br></br>
                                Transferência de conhecimento de todo o trabalho desenvolvido em conjunto. Disseminação da cultura data-driven com capacitação para utilização e operacionalização dos produtos criados e mentoria para exploração de novas oportunidades com dados.
                            </p>
                            <p><strong>Duração da Fase:</strong><br></br>
                                1 mês
                            </p>
                            <p><strong>O que será feito no Carry Out:</strong></p>
                            <ul>
                                <li>Capacitação in-company e Online</li>
                                <li>Mentoria especializada</li>
                            </ul>
                        </div>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/cocriacao/cocriacao-ilustracao3.png")} alt="Oncase Labs" style={{width:"auto", maxHeight:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/cocriacao/cocriacao-ilustracao4.png")} alt="Oncase Labs" style={{width:"auto", maxHeight:"400px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8" style={{paddingLeft:'120px'}}>
                            <h5>4. Assist</h5>
                            <p><strong>Como Funciona:</strong><br></br>
                                Construção de métricas para acompanhamento dos  produtos e práticas implementadas, estabelecimento de co-governança da cultura data-driven junto ao cliente e apoio contínuo.
                            </p>
                            <p><strong>Duração da Fase:</strong><br></br>Assistência contínua</p>
                            <p><strong>O que será feito no Carry Out:</strong></p>
                            <ul>
                                <li>Co-Governaça</li>
                                <li>Suporte remoto e presencial</li>
                            </ul>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                            <h4>Aplicações do Oncase Lab para co-criação de Produtos Analíticos</h4>
                        </div>
                        <div className="row align-items-center" style={{paddingBottom:"50px"}}>
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/cocriacao/cocriacao-aplicacao3.png")} alt="Oncase Labs" style={{width:"auto", height:"200px", marginLeft:"0em", marginRight:"0em",borderRadius:"10px",marginBottom:"20px"}}/>
                                </div>
                                <h5>Vendas e Marketing</h5>
                                <ul>
                                    <li>Previsibilidade de Churn</li>
                                    <li>Motor de recomendação</li>
                                    <li>Monitoramento de presença digital</li>
                                    <li>Monitoramento e análise de concorrentes</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/cocriacao/cocriacao-aplicacao2.png")} alt="Oncase Labs" style={{width:"auto", height:"200px", marginLeft:"0em", marginRight:"0em",borderRadius:"10px",marginBottom:"20px"}}/>
                                </div>
                                <h5>Operações</h5>
                                <ul>
                                    <li>Previsão de demanda</li>
                                    <li>Otimização de estoque</li>
                                    <li>Efetividade de rota</li>
                                    <li>Manutenção Preditiva</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="services-details-image">
                                    <img src={require("../../images/cocriacao/cocriacao-aplicacao1.png")} alt="Oncase Labs" style={{width:"auto", height:"200px", marginLeft:"0em", marginRight:"0em",borderRadius:"10px",marginBottom:"20px"}}/>
                                </div>
                                <h5>Financeiro</h5>
                                <ul>
                                    <li>Identificação de indicios de fraude</li>
                                    <li>Sonegação Fiscal</li>
                                    <li>Escoreamento para crédito</li>
                                    <li>Projeção Financeira</li>
                                </ul>
                            </div>
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