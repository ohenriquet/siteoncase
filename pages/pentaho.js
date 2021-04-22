import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerPentaho from '../components/Common/PageBannerPentaho';
import PentahoContent from '../components/Solucoes/PentahoContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerPentaho
                    pageTitle="Pentaho" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <PentahoContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;