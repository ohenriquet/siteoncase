import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IAVendasContent from '../components/Solucoes/IAVendasContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Entenda como funciona inteligência artificial para vendas" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <IAVendasContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;