import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import OurServices from '../components/HomeOne/OurServices';
import AboutUs from '../components/HomeOne/AboutUs';
import FunFacts from '../components/Common/FunFacts';
import WorkingProcess from '../components/HomeOne/WorkingProcess';
// import Testimonial from '../components/Common/Testimonial';
import GetStartedProject from '../components/Common/GetStartedProject';
import Customers from '../components/Common/Customers';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/Layouts/Footer';
import Head from 'next/head';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <script type="text/javascript" src="/static/newsletter.js"></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72638634-3"></script>
                    <script type="text/javascript" src="/static/ganalytics.js"></script>
                </Head>
                <Navbar />
                <MainBanner />
                <OurServices />
                <AboutUs />
                <FunFacts />
                <WorkingProcess />
                {/* <Testimonial /> */}
                <GetStartedProject />
                <Customers />
                <Subscribe />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;