import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Solucoes/ScoraRiskContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Scora Risk" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <ServiceDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;