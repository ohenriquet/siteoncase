import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/Aplicacoes/ClassificacaoLeadsContent';
import ClassificacaoLeadsFunFacts from '../components/Aplicacoes/ClassificacaoLeadsFunFacts';
import Footer from '../components/Layouts/Footer';

class ProjectDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Classificação de Leads" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Project Details" 
                    breadcrumbUrl="/" 
                />
                <ProjectDetailsContent />
                <ClassificacaoLeadsFunFacts />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProjectDetails;