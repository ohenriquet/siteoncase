import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerMongo from '../components/Common/PageBannerMongo';
import MongoContent from '../components/Solucoes/MongoDBContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerMongo
                    pageTitle="MongoDB" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                />
                <MongoContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;