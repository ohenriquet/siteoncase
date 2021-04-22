import React, { Component } from 'react';
import Link from 'next/link';

class ProjectDetailsContent extends Component {
    render() {
        return (
            <div className="project-details-area ptb-100">
                <div className="container">
                    <div className="project-details-image">
                        <img className="case-details-image" src={require("../../images/projects/analise-risco.jpg")} alt="Scora Risk Análise de Risco" />
                    </div>

                    <div className="projects-details-desc">
                        <h3>Case de sucesso</h3>
                        <br></br>
                        <h4>O cliente</h4>
                        <p>Banco público responsável por distribuir dinheiro de programa federal de transferência de renda.</p>
                        <br></br>
                        <h4>Os desafios</h4>
                        <p>O cliente enfrentava problemas para identificar fraudes em cadastros no programa de benefícios, que em 2018 somaram R$2,25 bilhões. Além disso, os problemas relacionados à operações bancárias envolviam a necessidade de acompanhamento do tempo que os clientes passam nas filas esperando atendimento..</p>
                        <div className="features-text">
                            <p>Por fim, os contratos financeiros também precisavam ser avaliados para identificar inconformidades, sejam de documentos faltantes, erros de digitação, inconsistências ou mesmo possíveis fraudes.</p>
                        </div>
                        <br></br>
                        <h4>Resultados</h4>
                        <p>Com a aplicação da solução <strong>Scora Risk</strong>, o cliente conseguiu diminuir as fraudes em 20%, economizando R$450 milhões por ano.</p>

                        <p>Os contratos com os clientes do banco também foram analisados, o que resultou no crescimento do número de detecções de inconformidades. Além disso, as filas de atendimento de todas as agências são monitoradas.</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectDetailsContent;