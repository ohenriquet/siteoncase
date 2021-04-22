import React, { Component, lazy } from 'react';
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
                    <link rel="preload" href="../../images/home/banner-estatico.webp" as="image"></link>
                    <script type="text/javascript" defer src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
                    <script type="text/javascript" defer> new RDStationForms('contato-site-oncase-684522cc1f1f67acc288', 'UA-72638634-1').createForm();</script>
                    <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-72638634-1"></script>
                    <script type="text/javascript" src="/static/ganalytics.js" defer></script>
                    <script type="text/javascript" src="/static/neurologic.js" defer></script>
                    

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