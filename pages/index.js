import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import OurServices from '../components/HomeOne/OurServices';
import Customers from '../components/Common/Customers';
import Footer from '../components/Layouts/Footer';
import Head from 'next/head';
import ContactForm from '../components/Contact/ContactForm';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    {/* <script type="text/javascript" src="../static/newsletter.js"></script> */}
                    {/* <script type="text/javascript" src="../static/rdstation.js"></script> */}
                    <script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js" async></script>
                    <script type="text/javascript" async> new RDStationForms('contato-site-oncase-684522cc1f1f67acc288', 'UA-72638634-1').createForm();</script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72638634-1"></script>
                    <script type="text/javascript" src="/static/ganalytics.js" async></script>
                    <script type="text/javascript" src="/static/neurologic.js" async></script>
                </Head>
                <Navbar />
                
                <MainBanner />
                <OurServices />
                <Customers />
                <ContactForm />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;