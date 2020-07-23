import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div className="fun-facts-area ptb-100">
                <div className="container">
                    <h4>Uma empresa:</h4>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.2s'>
                                <div className="single-fun-fact">
                                <img src={require("../../images/criatec.png")} alt="Criatec" />
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <h3>
                                    <img src={require("../../images/portodigital.png")} alt="Porto Ditigal" />
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='.4s'>
                                <div className="single-fun-fact">
                                <img src={require("../../images/manguezal.png")} alt="Manguez.al" />
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