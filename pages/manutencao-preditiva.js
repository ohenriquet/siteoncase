import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/Aplicacoes/ManutencaoPreditivaContent';
import ManutencaoPreditivaFunFacts from '../components/Aplicacoes/ManutencaoPreditivaFunFacts';
import Footer from '../components/Layouts/Footer';

class ProjectDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Manutenção Preditiva" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Project Details" 
                    breadcrumbUrl="/" 
                />
                <ProjectDetailsContent />
                <ManutencaoPreditivaFunFacts />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProjectDetails;