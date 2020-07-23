import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div className="fun-facts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.2s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        4 milhões
                                    </h3>
                                    <p>de m³ de água economizados</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        20% de queda
                                    </h3>
                                    <p>do número de fraudes</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.4s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        75% de aumento
                                    </h3>
                                    <p>da taxa de conversão</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.5s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        8 milhões
                                    </h3>
                                    <p>de liquidações de cartão de crédito por ano</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;