import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/Aplicacoes/JornadaClienteContent';
import JornadaClienteFunFacts from '../components/Aplicacoes/JornadaClienteFunFacts';
import Footer from '../components/Layouts/Footer';

class ProjectDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Jornada do Cliente" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Project Details" 
                    breadcrumbUrl="/" 
                />
                <ProjectDetailsContent />
                <JornadaClienteFunFacts />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProjectDetails;