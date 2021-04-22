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
                    {/* <script type="text/javascript" src="../static/rdstation.js"></script> */}
                    {/* <script type="text/javascript" src="../static/newsletter.js"></script> */}
                    <script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
                    <script type="text/javascript"> new RDStationForms('contato-site-oncase-684522cc1f1f67acc288', 'UA-72638634-1').createForm();</script>
                    <script type="text/javascript"> new RDStationForms('assine-a-newsletter-0eac706012670eac1f9f', 'UA-72638634-1').createForm();</script>
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