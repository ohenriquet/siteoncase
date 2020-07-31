import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerCloudera from '../components/Common/PageBannerCloudera';
import ClouderaContent from '../components/Solucoes/ClouderaContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerCloudera
                    pageTitle="Cloudera" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <ClouderaContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;