import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#c5c5c5", paddingTop:"25px", paddingBottom:"25px"}}>
                <div className="container">
                    <h4>Parceiros Oficiais:</h4>
                    <div className="row">
                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.2s'>
                                <div className="single-fun-fact">
                                <img src={require("../../images/pentaho.png")} alt="pentaho" />
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.3s'>
                                <div className="single-fun-fact">
                                    <img src={require("../../images/cloudera.png")} alt="cloudera" />
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col">
                            <ReactWOW animation='fadeInUp' delay='.4s'>
                                <div className="single-fun-fact">
                                <img src={require("../../images/mongo.png")} alt="mongodb" />
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