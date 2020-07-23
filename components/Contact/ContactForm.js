import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            
            <div className="contact-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={require("../../images/contact.png")} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3>Fale com um representante de vendas</h3>
                            <div role="main" id="contato-scora-platform-938d46daa069102c4e42"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;