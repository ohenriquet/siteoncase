import React, { Component } from 'react';

class SubscribeStyleThree extends Component {
    render() {
        return (
            <section className="subscribe-section p-0">
                <div className="container">
                    <div className="subscribe-content-area mb-0">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="subscribe-image">
                                    <img src={require("../../images/subscribe.png")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="subscribe-content">
                                    <h2>Receba nossas novidades em primeira mão</h2>
                                    <p>Mensalmente enviamos um compilado dos conteúdos que foram publicados durante o mês para o seu endereço de e-mail.</p>
                                </div>

                                <div role="main" id="assine-a-newsletter-0eac706012670eac1f9f"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SubscribeStyleThree;