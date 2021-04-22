import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            
            <div className="contact-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={require("../../images/FILIPE VENDEDOR.png")} alt="Consultor de Vendas Oncase" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3>Fale com um representante de vendas</h3>
                            <div role="main" id="contato-site-oncase-684522cc1f1f67acc288"></div>
                        </div>
                    </div>
                    <div role="main" id="contato-site-oncase-684522cc1f1f67acc288"></div>
                    
                </div>
            </div>
        );
    }
}

export default ContactForm;