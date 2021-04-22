import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerBIA from '../components/Common/PageBannerBIA';
import BusinessIntelligenceAnalyticsContent from '../components/Solucoes/BusinessIntelligenceAnalyticsContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerBIA
                    pageTitle="Soluções de Business Intelligence e Analytics" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <BusinessIntelligenceAnalyticsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;