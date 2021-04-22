import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#e4e4e4", paddingTop:"25px", paddingBottom:"25px"}}>
                <div className="container">
                    <h4>Uma empresa:</h4>
                    <div className="row">
                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.2s'>
                                <div className="single-fun-fact">
                                <img src={require("../../images/criatec.png")} alt="Criatec" />
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <img src={require("../../images/portodigital.png")} alt="Porto Digital" />
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.4s'>
                                <div className="single-fun-fact">
                                <img src={require("../../images/manguezal.png")} alt="Manguez.al" />
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