import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div className="fun-facts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.2s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        20%
                                    </h3>
                                    <p>Redução do tempo médio dos atendimentos</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        75%
                                    </h3>
                                    <p>Aumento da taxa de conversão</p>
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