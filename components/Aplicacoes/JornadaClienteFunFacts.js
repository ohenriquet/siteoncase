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
                                        25%
                                    </h3>
                                    <p>Aumento do nível de satisfação dos clientes</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        38%
                                    </h3>
                                    <p>Aumento do índice LTV</p>
                                </div>
                            </ReactWOW>
                        </div>>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;