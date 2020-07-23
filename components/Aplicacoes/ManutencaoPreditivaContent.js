import React, { Component } from 'react';
import Link from 'next/link';

class ProjectDetailsContent extends Component {
    render() {
        return (
            <div className="project-details-area ptb-100">
                <div className="container">
                    <div className="project-details-image">
                        <img className="case-details-image" src={require("../../images/projects/manutencao-preditiva.jpg")} alt="Scora Maintenance Manutenção Preditiva" />
                    </div>

                    <div className="projects-details-desc">
                        <h3>Case de sucesso</h3>
                        <br></br>
                        <h4>O cliente</h4>
                        <p>Empresa responsável pelos serviços de saneamento básico, captação, tratamento e distribuição de água no estado.</p>
                        <br></br>
                        <h4>Os desafios</h4>
                        <p>O cliente enfrentava problemas na hora de renovar o seu parque hidrômetro. Como o volume de medidores que precisavam ser trocados era alto, e o potencial de troca flutua em torno de 10 a 15% ao ao, por questões orçamentárias o desafio era definir quais deles deveriam ser substituídos.</p>
                        <div className="features-text">
                            <p>Entre os critérios usados para tomar esta decisão, destacam-se a idade de instalação e a marca do fabricante do medidor. Por ser um item mecânico, o desgaste de um hidrômetro não depende apenas do tempo, mas da sua utilização.</p>

                            <p>Neste cenário utilizamos o <strong>Scora Maintenance</strong> para trazer mais eficiência aos processos e criar novas regras para melhorar a visão do parque de hidrômetros. Com o uso de <strong>inteligência artificial</strong> e <strong>big data</strong>, o <strong>Scora Maintenance</strong> entrou para previnir e evitar falhas de hidrômetros, atuando na <strong>manutenção preditiva</strong> dos equipamentos. Além disso, otimizar o agendamento de manutenções nos aparelhos e a melhor maneira de corrigir um problema para reduzir custos e tempo de serviço.</p>
                        </div>
                        <br></br>
                        <h4>Resultados</h4>
                        <p>Com o programa de troca de hidrômetros e o suporte da <a href="https://oncase.com.br"><strong>Oncase</strong></a>, o cliente registrou um aumento de R$ 1,23 milhão no seu faturamento mensal. Agora as substituições são mais acuradas e impactam positivamente na operação, priorizando os hidrômetros que precisam ser trocados com mais urgência. Ao contrário do que era feito no passado, o cliente agora toma essas decisões baseado em dados reais da performance de cada equipamento.</p>

                        <p>Além dos ganhos financeiros, foi projetado uma redução de 4 milhões de m³ de água desperdiçada por ano. </p>

                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectDetailsContent;