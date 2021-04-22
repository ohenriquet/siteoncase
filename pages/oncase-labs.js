import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerLab from '../components/Common/PageBannerLab';
import OncaseLabContent from '../components/Solucoes/OncaseLabContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerLab
                    pageTitle="Cocriação" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <OncaseLabContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;