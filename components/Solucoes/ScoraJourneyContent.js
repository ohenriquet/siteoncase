import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100" style={{paddingBottom:"0px"}}>
                <div className="container">
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/jornada/jornada_texto1.png")} alt="Jornada do Cliente" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc" style={{paddingRight:'80px'}}>
                                    <h3>Foco no cliente</h3>
                                    <p>Clientes são o combustível das empresas. Existem inúmeros formas de contato entre os clientes e a empresa, que geralmente passam por sistemas de gerenciamento independentes, o que gera perda de informações.</p>

                                    <p>Estamos falando de todas as interações que temos com os clientes, desde antes deles se tornarem clientes - um prospect - passando pelos pontos de contato - engajamento - até o momento que eles nos deixam - churn.</p>

                                    <p>Já parou para pensar na quantidade de dados e lições aprendidas que existem nessa jornada e que ficam espalhadas nos diferentes sistemas? Como você está fazendo para tirar insights disso?</p>
                                </div>
                            </div>

                        </div>
                        <div className="row align-items-center" style={{paddingTop:"80px",paddingBottom:"80px"}}>
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc" style={{paddingRight:'80px'}}>
                                    <p>A intenção não é capturar todas as jornadas possíveis do cliente - e são muitas! - mas entender as jornadas campeãs, respeitando as peculiaridades de cada cliente, e os momentos ideais para oferecer algum produto novo e adequado, entender como otimizar sua felicidade e como torná-lo um entusiasta do seu produto.</p>

                                    <p>Estamos falando de ajudar na decisão e entender os porquês. Tanto na aquisição, na lealdade à marca quanto no aumento de valor dele ao longo do tempo (LTV). Ou seja, não apenas apresentar informações em um painel, mas ser presente com inteligência de recomendações, agrupamentos e influenciar na decisão.</p>

                                    <p>Quer entender de forma orientada a dados a jornada do seu cliente de forma compreensiva e em tempo real? Venha conosco para gerar ações efetivas em escala.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/jornada/jornada-texto2.png")} alt="Jornada do Cliente" />
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col lg-6">
                        <div className="row align-items-center">
                        <h3>Aplicações do Scora Journey</h3>
                        </div>
                    </div>
                    <br></br>
                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-8" style={{paddingRight:'120px'}}>
                        <h4>Dashboard</h4>
                        <p>Tenha uma visão geral de performance e melhorias da jornada do cliente graças às recomendações feitas.</p>
                        <p>Veja os resultados de vendas por setores e recomendação de ações baseadas em atividades do cliente.</p>
                        </div>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/jornada/ia-para-recomendação.png")} alt="Inteligência Artifical para Recomendação" style={{width:"auto", maxHeight:"260px", marginLeft:"0em", marginRight:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/jornada/upsell-crosssell.png")} alt="Performance de produto" style={{width:"auto", maxHeight:"260px", marginLeft:"0em", marginRight:"0em"}}/>
                        </div>
                        <div className="col md-8" style={{paddingLeft:'120px'}}>
                            <h4>Produto</h4>
                            <p>Aqui você pode ver a performance de campanhas e vendas anteriores de produtos em municípios.</p>
                            <p>Tenha também listas de recomendações de clientes na base que se beneficiariam desse mesmo tipo de produto.</p>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-8" style={{paddingRight:'120px'}}>
                            <h4>Leads</h4>
                            <p>Usando o enriquecimento de dados através da RFB, criamos uma lista de potenciais clientes fora da base da empresa</p>
                            <p>Esses dados podem ser exportados para iniciar uma campanha de marketing e aumentar a boca do funil da empresa.</p>
                        </div>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/jornada/segmentação-de-clientes.png")} alt="Enriquecimento de leads" style={{width:"auto", maxHeight:"260px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/jornada/conhecer-profundamente-o-cliente.png")} alt="Oncase Labs" style={{width:"auto", maxHeight:"260px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                        <div className="col md-8" style={{paddingLeft:'120px'}}>
                            <h5>Cliente</h5>
                            <p>Pesquise por clientes específicos e tenha um histórico detalhado sobre ele.</p>
                            <p>A análise histórica mostra todas as interações entre você e esse cliente e as vendas bem sucedidas.</p>
                            <p>Na recomendação, você pode ver o perfil de comportamento desse cliente em comparação a outros clientes similares e obter uma lista de produtos com maior potencial de compra, baseados no histórico analítico e nos padrões de compras de outros.</p>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-8" style={{paddingRight:'120px'}}>
                            <h4>Mercado</h4>
                            <p>Dessa vez focando em regiões do estado e como foram as atividades de engajamento com produtos e temas anteriores. Consumo é local, online? De que tipo de produto?</p>
                            <p>Além disso, recomendamos que produtos são mais interessantes para serem lançados em uma determinada cidade.</p>
                        </div>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/jornada/campanhas-direcionadas.png")} alt="Análise de mercado" style={{width:"auto", maxHeight:"260px", marginleft:"0em", marginright:"0em"}}/>
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