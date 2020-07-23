import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div className="fun-facts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.2s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        77%
                                    </h3>
                                    <p>Redução do tempo de análises</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        269%
                                    </h3>
                                    <p>ROI em 6 meses</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.4s'>
                                <div className="single-fun-fact">
                                    <h3>
                                        Nova
                                    </h3>
                                    <p>Fonte de receita</p>
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