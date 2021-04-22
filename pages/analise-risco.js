import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/Aplicacoes/AnaliseRiscoContent';
import AnaliseRiscoFunFacts from '../components/Aplicacoes/AnaliseRiscoFunFacts'
import Footer from '../components/Layouts/Footer';

class ProjectDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Análise de Risco" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Project Details" 
                    breadcrumbUrl="/" 
                />
                <ProjectDetailsContent />
                <AnaliseRiscoFunFacts />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProjectDetails;