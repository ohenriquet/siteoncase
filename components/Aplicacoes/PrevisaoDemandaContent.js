import React, { Component } from 'react';
import Link from 'next/link';

class ProjectDetailsContent extends Component {
    render() {
        return (
            <div className="project-details-area ptb-100">
                <div className="container">
                    <div className="project-details-image">
                        <img className="case-details-image" src={require("../../images/projects/previsao-demanda.gif")} alt="Scora Demand Previsão de Demanda"/>
                    </div>

                    <div className="projects-details-desc">
                    <h3>Case de sucesso</h3>
                        <br></br>
                        <h4>O cliente</h4>
                        <p>Empreiteira de médio porte.</p>
                        <br></br>
                        <h4>Os desafios</h4>
                        <p>O cliente enfrentava dificuldades para avaliar e classificar opções de empreendimento.</p>
                        <div className="features-text">
                            <p>Cruzamos informações georeferenciadas para gerar insights a partir de análises territoriais para apoiar o processo de decisão de aquisição de terrenos para construção e incorporação..</p>

                            <p>Neste cenário utilizamos o <strong>Scora Demand</strong> para trazer trazer mais inteligência na escolha de investimentos. Além dos dados de preço por m² que já eram utilizados, introduzimos dados subjetivos para obter o índice de desejabilidade dos empreendimentos, baseado em índices de chuva, criminalidade, proximidade a pontos de interesse como supermercados, escolas e áreas de lazer.</p>
                        </div>
                        <br></br>
                        <h4>Resultados</h4>
                        <p>Além de mais informações serem levadas em consideração na tomada de decisões, aumentando a assertividade dos empreendimentos, o <strong>Scora Demmand</strong> reduziu em 77% o tempo das análises.</p>

                        <p>Por solicitação do cliente, encapsulamos a solução para que ele pudesse revender a solução como um produto para concorrentes. Com isso, o cliente conseguiu um ROI de de 269% em apenas 6 meses.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectDetailsContent;