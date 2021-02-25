import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerSobre from '../components/Common/PageBannerSobre';
import UmaEmpresa from '../components/AboutUs/UmaEmpresa';
import ParceirosOficiais from '../components/AboutUs/ParceirosOficiais';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
// import FunFacts from '../components/Common/FunFacts';
import GetStartedProject from '../components/Common/GetStartedProject';
// import Testimonial from '../components/Common/Testimonial';
import Customers from '../components/Common/Customers';
import Footer from '../components/Layouts/Footer';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerSobre
                    pageTitle="Sobre Nós" 
                    breadcrumbTextOne="" 
                    breadcrumbTextTwo="" 
                    breadcrumbUrl="" 
                />
                <AboutUsContent />
                <UmaEmpresa />
                <ParceirosOficiais />

                <div className="pb-100">
                    <GetStartedProject />
                </div>

                {/* <Testimonial /> */}
                <Customers />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;