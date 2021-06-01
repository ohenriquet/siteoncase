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
                                    <p>Quando olhamos um belo painel com interatividade e dados consistentes ficamos admirados com o trabalho ali realizado, mas será que percebemos que, na maioria das vezes, a maior parte do trabalho está em um processo que o usuário final não consegue observar.</p>

                                    <p>Esse é o processo de ETL, que consiste em <strong>reunir diversas fontes de dados</strong>, transformar esses dados para que seja mais claro o entendimento e também remover sujeiras e a persistência deles já transformados e prontos para o consumo de ferramentas de visualização.</p>

                                    <p>O armazenamento e a análise de dados são mecanismos já extremamente difundidos no mercado digital. Para entender como funciona a operacionalização dessas práticas é fundamental conhecer <strong>o que é ETL</strong> e suas funcionalidades.</p>
                                    
                                    <p>O <strong>ETL</strong> — cuja sigla significa <strong>extração, transformação e carregamento</strong> (Loading) — é um processo de integração de dados que faz a transição, limpeza e otimização de dados de várias fontes diferentes para um armazenamento final centralizado.</p>

                                    <p>Saber <strong>o que é ETL</strong> é muito importante para entender como é possível automatizar processos e gerar insights por meio de business intelligence (BI) que orientam a estratégia e tomada de decisões de uma marca. Acompanhe com a gente!</p>
                                </div>
                            </div>

                        </div>
                     
                    </div>

                    <div className="row align-items-center" style={{paddingTop:"40px", paddingBottom:"40px"}}>
                        <div className="col md-8">
                            <h3>O que é ETL e para que serve?</h3>
                            <p>Para saber o que é ETL é importante primeiramente fazer uma <strong>ambientação histórica</strong>. O processo não é tão novo como se pode imaginar e sua origem responde a cinco décadas atrás.</p>

                            <p>Foi nos anos 70 que o ETL foi introduzido como um processo de <strong>integração e carregamento de dados</strong> dentro de camadas de supercomputadores para análise e processamento.</p>

                            <p>Entre os anos 80 e início do século XX, a prática foi cada vez mais sendo utilizada para armazenamento de um grande volume de dados para ajudar aplicações de BI a embasar decisões e estratégias de negócios de empresas.</p>

                            <p>Hoje, as técnicas de ETL são fundamentais para otimizar o tempo e a eficácia das decisões de empresas que querem se manter competitivas no mercado digital. No processo, a automatização de dados por meio de <a href="https://blog.oncase.com.br/big-data-o-que-e-e-porque-utilizar-em-seu-negocio/">big data</a> e <a href="https://blog.oncase.com.br/o-que-e-machine-learning/">machine learning</a> são utilizadas para percepção de padrões nos dados extraídos e a capacidade da máquina de aprender e atribuir respostas esperadas a diferentes modelos de combinações.</p>

                            <p>O ETL pode ser dividido em processos de batch <strong>ou</strong> streaming. O batch lida com o processamento de um grande volume de dados estocados durante um período de tempo, o que acarreta em um processo mais demorado.</p>

                            <p>Enquanto o processo por streaming processa os dados <strong>em tempo real</strong>  no exato momento em que eles chegam. Como é uma maneira de introduzir dados instantaneamente na hora que o operador deseja, o ETL streaming lida com uma quantidade menor ao estocado pelos processos de batch.</p>

                            <h3>Qual escolher entre ETL X ELT?</h3>
                            <p>As diferenças básicas entre <strong>ETL e ELT</strong> reside — entre outras, mas principalmente —  na <strong>complexidade de execução</strong> dos dois processos.</p>
                            <p>No caso do ELT, o design e a execução exigem mais esforços, apesar de oferecer muitos benefícios a longo prazo.</p>
                            <p>Entretanto, se o sistema de destino do processo de transformação de dados não for robusto o suficiente, o melhor procedimento a ser escolhido é o <strong>ETL</strong>.</p>
                            <h3>Lista de ferramentas ETL</h3>
                            <p>Um ETL aplicado para soluções inteligentes de negócios é conhecido como Business Inteligence (BI). Dentre a variada <strong>lista de ferramentas ETL</strong>, um exemplo de destaque entre as ferramentas opensource de <strong>ETL BI</strong> é o <a href="https://www.oncase.com.br/pentaho/">Pentaho</a>, uma suíte completa de BI que atende projetos de dados de ponta a ponta, desde a integração até a análise dos dados e sem interromper nenhuma arquitetura existente.</p>
                            <p>A plataforma Pentaho, além de suporte de data integration, possui soluções de big data, criação de dashboards e portais corporativos, além de otimização e governança em data warehouse com o objetivo de ajudar empresas a extrair valores e insights de seus dados.</p>
                            <p>Saiba como <a href="https://marketing.oncase.com.br/criando-etl-pentaho-data-integration">criar um projeto ETL do zero com o Pentaho Data Integration</a></p>
                            <p>Outras ferramentas para desenvolvimento visual de ETL são:</p>
                            <ul>
                                <li>IBM InfoSphere DataStage;</li>
                                <li>Informática Power Center; </li>
                                <li>SAP BusinessObjects Data Services; </li>
                                <li>Microsoft SQL Server Integration Services (SSIS);</li>
                                <li>Oracle Data Integrator (ODI);</li>
                                <li>Power Center</li>
                                <li>entre outras.</li>
                            </ul>
                            <p>Portanto, o ETL é um mecanismo de criar funil (ou pipeline) de dados que os coleta a partir de várias fontes — servidores SQL ou NoSQL, sistemas ERP ou CRM, arquivos de textos ou documentos, <a href="https://pluga.co/blog/marketing/dicas-de-como-criar-email-marketing/">email marketing</a>, portais na web, entre outros — transforma a informação e a leva para o destino final de armazenamento de dados.</p>
                            <p>A criação do pipeline que realiza a transformação dos dados é realizada pelo <strong>engenheiro de dados</strong>, ou cientista de dados.</p>
                            <p>Entenderemos melhor como funciona o trabalho do engenheiro de dados e esse fluxo ETL no próximo tópico.</p>
                            <h3>Como funciona o fluxo de dados?</h3>
                            <p>O entendimento do fluxo e etapas da integração de dados que formam as letras da sigla é muito importante para entender o que é ETL e como funciona o processo. Vamos falar de cada um deles a seguir e como eles repercutem nas estratégias de negócio de uma marca.</p>
                            <h5>Extração (extraction)</h5>
                            <p>O processo de extração representa a apreensão de dados a serem analisados e transformados a partir de suas origens, que podem ser variadas.</p>
                            <p>Os dados podem ser extraídos virtualmente de qualquer fonte, seja estruturada ou não, como por meio de interações de clientes, cadastros em landing pages ou por dados internos específicos da própria organização.</p>
                            <p>Como já mencionado, vários são os exemplos de fonte de dados para extração, como:</p>
                            <ul>
                                <li>base de dados SQL ou NoSQL; </li>
                                <li>sistemas ERP ou CRM; </li>
                                <li>arquivos de textos ou documentos;</li>
                                <li>emails; </li>
                                <li>portais na web;</li>
                                <li>redes sociais; </li>
                                <li>entre outros.</li>
                            </ul>
                            <h5>Transformação (transformation)</h5>
                            <p>Após a extração, temos a etapa de transformação de dados. Nessa fase, os dados extraídos são transformados de acordo com o modelo de negócio e estratégia das empresas.</p>
                            <p>Durante o processo de transformação, são criadas tabelas de preparo para armazenar os dados temporariamente enquanto eles são devidamente transformados antes de serem carregados no destino final.</p>
                            <p>A transformação consiste em um apanhado de operações a serem realizadas nos dados, que são:</p>
                            <ul>
                                <li>filtragem;</li>
                                <li>classificação;</li>
                                <li>agregação;</li>
                                <li>limpeza;</li>
                                <li>eliminação de duplos;</li>
                                <li>e validação.</li>
                            </ul>
                            <p>Plataformas como a <a href="https://www.oncase.com.br/cloudera/">Cloudera</a> são bastante eficazes na realização desse processo, fazendo as empresas economizarem tempo e gastos com uma gestão de dados bem feita que elimina informações não confiáveis ou ausentes.</p>
                            <p>Além das ações listadas acima, a transformação atua com cálculos, traduções e resumos de base de dados primárias. Dessa forma, é capaz de desenvolver parâmetros e indicadores métricos que orientam a empresa de acordo com suas estratégias.</p>
                            <h5>Carregamento (loading)</h5>
                            <p>A última fase, o <strong>carregamento</strong>, representa a passagem dos dados transformados para o armazenamento final centralizado.</p>
                            <p>O processo é automatizado e contínuo. Os dados armazenados são otimizados e geram insights de atuação e melhoramento estratégico para empresa, como definição de táticas de upsell, entre outras.</p>

                            <h3>Como implementar ETL em um negócio?</h3>
                            <p>Serviços de <strong>SaaS</strong> (Software as a Service) e ferramentas ETL podem ser aplicados em empresas para <strong>automatização de processos</strong> e assim otimizar o planejamento e as ações de venda e <a href="https://blog.oncase.com.br/retencao-de-clientes/">retenção de clientes</a>, por exemplo.</p>
                            <p>Softwares como o <strong>Pentaho</strong> são utilizados em parceria com plataformas de soluções inteligentes como o <a href="https://www.oncase.com.br/scora-journey/">Scora Journey</a>.</p>
                            <p>O Scora Journey é uma ferramenta de gestão de dados que visa melhorar a performance da organização a partir de uma análise embasada de dados que geram insights valiosos. Entre as ações da plataforma estão:</p>
                            <ul>
                                <li>comparar performances de campanhas de vendas atuais com antigas;</li>
                                <li>a partir da base de <a href="https://blog.oncase.com.br/dados-de-clientes/">dados de clientes</a>, oferecer lista de recomendação de clientes que poderiam se beneficiar da mesma oferta de produto ou serviço;</li>
                                <li>criar  uma lista de leads (clientes em potencial) fora da base de dados da empresa;</li>
                                <li>fornecer um big data com histórico detalhado de clientes específicos para comparar com o comportamento de outros similares;</li>
                                <li>aferir dados geográficos e performances de engajamento de produtos ou serviços anteriores, embasando assim insights para orientar os próximos passos.</li>
                            </ul>
                            <p>Ferramentas como o Scora Journey permitem desenvolver ações preditivas baseadas no <a href="https://blog.oncase.com.br/mapa-de-jornada-do-cliente/">mapa de jornada do cliente</a> e tem importância decisiva dentro dos atuais parâmetros de concorrência no mercado digital</p>
                            <p>Aprendeu <strong>o que é ETL?</strong> Se você quiser entender mais sobre isso ou outros processos de análise e gestão de dados para o mercado digital, <a href="https://www.oncase.com.br/contato/">converse com um especialista da Oncase</a>.Se você gostou do conteúdo, esperamos que continue acompanhando mais novidades sobre tecnologia aplicada ao mercado no nosso <a href="https://blog.oncase.com.br/">blog</a>. Até a próxima!</p>
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