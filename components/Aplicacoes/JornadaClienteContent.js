import React, { Component } from 'react';
import Link from 'next/link';

class ProjectDetailsContent extends Component {
    render() {
        return (
            <div className="project-details-area ptb-100">
            <div className="container">
                <div className="project-details-image">
                    <img className="case-details-image" src={require("../../images/projects/jornada-consumidor.jpg")} alt="Scora Journey Jornada do Cliente" />
                </div>

                <div className="projects-details-desc">
                    <h3>Case de sucesso</h3>
                    <br></br>
                    <h4>O cliente</h4>
                    <p>Entidade de apoio a micro e pequenas empresas.</p>
                    <br></br>
                    <h4>Os desafios</h4>
                    <p>A empresa queria melhorar o nível de satisfação dos clientes (customer success) para que eles gastassem mais, aumentando o LTV (lifetime value).</p>
                    <p></p>
                    
                    <br></br>
                    <h4>Resultados</h4>
                    <p>A solução <strong>Scora Leads</strong> analisou todos os produtos do portfólio da empresa, bem como os perfis dos clientes que compraram. A partir destas informações, os algoritmos de <strong>inteligência artificial</strong> criaram modelos de recomendação cliente-produto(s) baseado no nível de customer success.</p>

                    <p>Para cada novo cliente, o sistema indica uma trilha de produtos que possuem fit com o perfil do cliente. Com isso foi possível aumentar o nível de satisfação dos clientes, tornando-os ativos na divulgação da empresa, bem como aumentar o valor total de lucro que cada cliente pode gerar.</p>

                    </div>
            </div>
        </div>
        );
    }
}

export default ProjectDetailsContent;