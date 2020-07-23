import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div className="fun-facts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.2s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        4 milhões
                                    </h3>
                                    <p>de m³ de água economizados</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        R$1,23 milhões
                                    </h3>
                                    <p>crescimento de faturamento</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.4s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        54%
                                    </h3>
                                    <p>aumento de eficiência</p>
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