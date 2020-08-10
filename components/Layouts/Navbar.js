import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand" style={{maxWidth:175}}>
                                        <img src={require("../../images/logo-white.png")} className="white-logo" alt="logo" />
                                        <img src={require("../../images/logo-black.png")} className="black-logo" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        {/* <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">Home</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-us" activeClassName="active">
                                                <a className="nav-link">Sobre nós</a>
                                            </Link>
                                        </li> */}
 
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Produtos <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="https://scora.ai/" activeClassName="active">
                                                        <a className="nav-link">Scora</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="https://tarantulla.io/pt.html" activeClassName="active">
                                                        <a className="nav-link">Tarantulla</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="https://oktopusapp.com/" activeClassName="active">
                                                        <a className="nav-link">Oktopus</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="https://treinamentos.oncase.com.br/" activeClassName="active">
                                                        <a className="nav-link">Treinamentos</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="https://toolkit.onca.se/" activeClassName="active">
                                                        <a className="nav-link">Toolkit</a>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Serviços <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/big-data" activeClassName="active">
                                                        <a className="nav-link">Big Data</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/business-intelligence-analytics" activeClassName="active">
                                                        <a className="business-intelligence-analytics">BI e Analytics</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/inteligencia-artificial" activeClassName="active">
                                                        <a className="nav-link">Inteligência Artificial</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/oncase-labs" activeClassName="active">
                                                        <a className="nav-link">Oncase Labs</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Tecnologias <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/cloudera" activeClassName="active">
                                                        <a className="nav-link">Cloudera</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/mongodb" activeClassName="active">
                                                        <a className="nav-link">MongoDB</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/pentaho" activeClassName="active">
                                                        <a className="nav-link">Pentaho</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
{/* 
                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contato</a>
                                            </Link>
                                        </li> */}
                                    </ul>

                                    <div className="others-options">
                                        <Link href="https://onca.se/contato">
                                            <a className="default-btn">
                                                Solicite uma proposta 
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;