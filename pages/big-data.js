import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerBD from '../components/Common/PageBannerBD';
import BigDataContent from '../components/Solucoes/BigDataContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerBD
                    pageTitle="Soluções de Big Data" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <BigDataContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;