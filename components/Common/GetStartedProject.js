import React, { Component } from 'react';

class GetStartedProject extends Component {
    render() {
        return (
            <section className="productive-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="productive-content">
                                <h3>Uma das melhores empresas para se trabalhar no Recife!</h3>
                                <p>Quer trabalhar na Oncase? Está procurando as nossas vagas disponíveis? Você está no lugar certo! Hoje, somos Uma das melhores empresas para se trabalhar no Recife.</p>
                                <p>Para alcançar nossas metas precisamos de mais pessoas talentosas para reforçar nossa equipe e agilizar nosso crescimento.</p>
                                <p>Somos uma equipe jovem, sedenta por alcançar metas que pessoas normais consideram impossíveis. O que nos motiva são os desafios. Cada pessoa aqui dentro é comprometida com os seus objetivos, mas também está sempre buscando ajudar os seus colegas.</p>
                                <p>Queremos pessoas legais, engajadas e animadas. Gente que não tem medo de arriscar, busca objetivos enormes e sabe que nada é impossível.</p>

                                <div className="productive-btn">
                                    <a className="productive-btn" href="/contato">
                                        Entre em contato
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="productive-image">
                                <img src={require("../../images/gptw.png")} alt="oncase great place to work" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GetStartedProject;