import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerIA from '../components/Common/PageBannerIA';
import InteligenciaArtificialContent from '../components/Solucoes/InteligenciaArtificialContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerIA
                    pageTitle="Soluções de Inteligência Artificial" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <InteligenciaArtificialContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;