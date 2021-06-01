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
                                    <h3>Entenda como funciona</h3>
                                    <p>O mapa de jornada do cliente traça perfis e tendências de negócio a partir de um histórico de <strong>relações do consumidor com a marca.</strong></p>

                                    <p>A montagem do mapa, portanto, parte da análise dos primeiros passos dos clientes, desde a identificação de necessidades de serviço, buscas de informações, primeiro contato com a marca, processo de compra, até o relacionamento e <strong>engajamento pós-compra.</strong></p>

                                    <p>A <a href="https://blog.oncase.com.br/jornada-do-cliente-jornada-de-compra/">jornada do cliente é diferente da jornada de compra</a>. Enquanto o segundo acompanha apenas o processo que levou o cliente até o momento preciso da transação, o primeiro acompanha o prolongamento da relação e as estratégias de engajamento pós-compra.</p>
                                    
                                    <p>A análise de todo esse histórico é essencial para o desenvolvimento de estratégias de marketing que visam a manutenção da relação saudável com a audiência: a aproximação e <strong>conteúdo personalizado</strong> feitos na hora certa, e a oferta de um novo produto que converse com o momento e <strong>necessidades do cliente</strong>.</p>
                                </div>
                            </div>

                        </div>
                        <div className="row align-items-center" style={{paddingTop:"80px",paddingBottom:"80px"}}>
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc" style={{paddingRight:'80px'}}>

                                    <p>O mapeamento torna-se eficaz à medida que adequa as ações da empresa para <strong>o que realmente interessa</strong> em termos de vendas e bom relacionamento. No processo, a operação torna-se mais eficaz e direcionada, a marca <a href="https://blog.oncase.com.br/otimizacao-de-recursos-na-crise/">otimiza recursos</a> e o cliente tende à <strong>fidelização.</strong></p>

                                    <p>Já imaginou a quantidade de dados e informações importantes que podem ser aferidos durante cada etapa dessa jornada? O armazenamento e gerenciamento de dados é fundamental para a geração de insights e para a fixação de lições de atuação baseadas nos <strong>modelos de sucesso</strong> previamente analisados.</p>

                                    <p>O reconhecimento de modelos e padrões “campeões” de vendas devem ser utilizados a partir das necessidades e especificidades de cada cliente para manter assim um engajamento prolongado e personalizado.</p>

                                    <p>É na <strong>compreensão dos porquês</strong> que embasam cada escolha por determinado produto que os dados apreendidos devem motivar as futuras ações estratégicas da marca para melhorar o serviço e a relação com o cliente. O mapa de jornada do cliente é um <strong>exercício contínuo de educação</strong> entre a empresa e seu público.</p>
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
                        <h3>Qual a importância dos insights sobre a jornada do cliente?</h3>
                        </div>
                    </div>
                    <br></br>
                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-8" style={{paddingRight:'120px'}}>
                        <p>É no contexto de não apenas apresentar informações e tendências em um painel, mas de também agir proativamente nas recomendações de linhas de ação analiticamente embasadas, que se assinala a importância dos insights no contexto do mapa de jornada do cliente.</p>
                        <p>Os insights são as soluções e recomendações inteligentes surgidas no contexto das análises de dados. A partir das preciosas informações apreendidas, é possível fundamentar formas específicas e personalizadas de aproximação com o cliente.</p>
                        <p>Assim, é possível gerar novas recomendações de compra de produtos ou serviços que estimulem o cliente a manter o relacionamento com a empresa e realizar novas compras. As ofertas tornam-se, assim, mais orgânicas, espontâneas e mais eficazes.</p>
                        <p>As ofertas e interações podem tanto significar a sugestão de novos produtos como uma renegociação contratual de serviços. Uma boa gestão de dados analisa cada uma dessas interações para guiar a atuação das próximas, sempre a partir do que gerou ou não gerou resultado em vendas e na renovação do engajamento do cliente.</p>
                        </div>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/jornada/ia-para-recomendação.png")} alt="Inteligência Artifical para Recomendação" style={{width:"auto", maxHeight:"260px", marginLeft:"0em", marginRight:"0em"}}/>
                        </div>
                    </div>
                    <div className="col lg-6">
                        <div className="row align-items-center">
                        <h3>Quais ferramentas devo usar para fazer o mapa da jornada do cliente?</h3>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/jornada/upsell-crosssell.png")} alt="Performance de produto" style={{width:"auto", maxHeight:"260px", marginLeft:"0em", marginRight:"0em"}}/>
                        </div>
                        <div className="col md-8" style={{paddingLeft:'120px'}}>
                            <p>Na elaboração do mapa de jornada do cliente, portanto, mais do que uma plataforma que apresenta dados para análise, é também de fundamental importância um gerador de insights que oriente as futuras ações da empresa.</p>
                            <p>Dessa forma, para a elaboração de um mapa de jornada do cliente otimizado e eficaz é importante que a ferramenta traga características que potencializam a performance de compras e prolongamento do engajamento da audiência, como:</p>
                            <p>dar a possibilidade de comparar performances de campanhas de vendas atuais com antigas;
                            oferecer lista de recomendação de clientes na base de dados que poderiam se beneficiar da mesma oferta de produto ou serviço;
                            criação de uma lista de leads (clientes em potencial) fora da base de dados da empresa;
                            base de dados com histórico detalhado de clientes específicos para fazer comparação de comportamento com outros similares;
                            aferição de dados geográficos e performances de engajamento de produtos ou serviços anteriores para embasar insights de como a oferta de novos produtos deve ser efetuada.</p>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-8" style={{paddingRight:'120px'}}>
                            <p>Nesse contexto, o Scora Journey surge como uma possibilidade a ser avaliada em virtude do seu pacote completo de aplicações para gestão de dados e orientação de insights.</p>
                            <p>Com o Scora Journey, você pode levar inteligência ao seu negócio e potencializar suas vendas a partir da análise de dados com uma plataforma segura e geradora de soluções inteligentes.</p>
                            <p>Gostou do conteúdo? Esperamos que as suas dúvidas a respeito do mapa de jornada do cliente tenham sido sanadas. Procuramos mostrar a importância do processo em um contexto de concorrência digital e também educar o empreendedor a melhorar o relacionamento com a sua audiência.</p>
                            <p>Quer ler mais sobre análise e gestão de dados, além de soluções eficazes para negócios? Continue acompanhando o conteúdo do blog da Oncase. Até mais! </p>
                        </div>
                        <div className="col md-4" style={{textAlign:'center'}}>
                            <img src={require("../../images/jornada/segmentação-de-clientes.png")} alt="Enriquecimento de leads" style={{width:"auto", maxHeight:"260px", marginleft:"0em", marginright:"0em"}}/>
                        </div>
                    </div>
                    

                </div>
                <div className="footer-section ptb-100"> 
                    <div className="row align-items-center" style={{marginLeft:"auto",marginRight:"auto",maxWidth:"1140px"}}>
                        <div className="col-6">
                            <h2 style={{color:"#FAFAFA", fontSize:"2.5rem"}}>Quer entender como podemos ajudar a sua empresa?</h2>
                        </div>
                        <div className="col-6 align-items-center" style={{textAlign:"center"}}>
                            <a href="/contato/" className="default-btn" style={{backgroundColor:"#53c8da",color:"#393953",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>FALE COM NOSSOS REPRESENTANTES<span></span></a>
                        </div>
                        
                    </div>

                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;