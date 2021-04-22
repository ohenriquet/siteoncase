import React, { Component } from 'react';
import Link from 'next/link';

class ProjectDetailsContent extends Component {
    render() {
        return (
            <div className="project-details-area ptb-100">
                <div className="container">
                    <div className="project-details-image">
                        <img className="case-details-image" src={require("../../images/projects/classificacacao-leads.jpg")} alt="image" />
                    </div>

                    <div className="projects-details-desc">
                        <h3>Case de sucesso</h3>
                        <br></br>
                        <h4>O cliente</h4>
                        <p>Entidade de apoio a micro e pequenas empresas.</p>
                        <br></br>
                        <h4>Os desafios</h4>
                        <p>Por atender clientes com perfis muito variados, a empresa tinha dificuldade de identificar quais produtos do seu portfólio oferecer para cada cliente.</p>
                        <p>Como consequência, o tempo para fechamento de cada contrato era relativamente alto, e a taxa de sucesso das negociações abaixo do mercado.</p>
                        <p></p>
                        
                        <br></br>
                        <h4>Resultados</h4>
                        <p>A solução <strong>Scora Leads</strong> agrupou a base de leads já existente do cliente em 5 personas de pessoa física e 9 personas jurídicas, com base no algoritmo de inteligência artificial. O uso dessas personas facilitou a indicação de produtos do portfólio para cada perfil de cliente</p>

                        <p>Além da base do cliente, com o uso do nosso datalake Mareh, o <strong>Scora Leads</strong> foi capaz de entregar para o cliente leads com alta taxa de conversão, diminuindo o esforço da equipe de vendas.</p>

                        </div>
                </div>
            </div>
        );
    }
}

export default ProjectDetailsContent;