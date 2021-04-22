import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/Aplicacoes/PrevisaoDemandaContent';
import PrevisaoDemandaFunFacts from '../components/Aplicacoes/PrevisaoDemandaFunFacts';
import Footer from '../components/Layouts/Footer';

class ProjectDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Previsão de Demanda" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Project Details" 
                    breadcrumbUrl="/" 
                />
                <ProjectDetailsContent />
                <PrevisaoDemandaFunFacts />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProjectDetails;