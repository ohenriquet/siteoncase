import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';
import RDForm from './rd-form';
import Head from 'next/head';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    {/* <script type="text/javascript" src="../static/rdstation.js"></script>
                    <script type="text/javascript" src="../static/newsletter.js"></script> */}
                </Head>
                <Navbar />
                <PageBanner
                    pageTitle="Contato" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Contact Us" 
                    breadcrumbUrl="/" 
                />
                <ContactForm />
                <div className="ptb-100">
                    <SubscribeStyleThree />
                </div>
                <RDForm />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;