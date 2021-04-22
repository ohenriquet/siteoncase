import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div className="fun-facts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInUp' delay='.2s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        20%
                                    </h3>
                                    <p>Diminuição de fraudes</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        100%
                                    </h3>
                                    <p>Acompanhamento de filas nas agências</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInUp' delay='.4s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        43%
                                    </h3>
                                    <p>Crescimento de detecções de inconformidades</p>
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