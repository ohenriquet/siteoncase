import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import MapaJornadaClienteContent from '../components/Solucoes/MapaJornadaClienteContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="O que é o Mapa da Jornada do Cliente?" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <MapaJornadaClienteContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;