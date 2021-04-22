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
                                {/* <Link href="/"> */}
                                    <a href="/" className="navbar-brand" style={{maxWidth:175}}>
                                        <img src={require("../../images/logo-white.png")} className="white-logo" alt="logo" />
                                        <img src={require("../../images/logo-black.png")} className="black-logo" alt="logo" />
                                    </a>
                                {/* </Link> */}

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
 
                                        <li className="nav-item">
                                            <Link href="/oncase-labs/">
                                                <a className="nav-link">
                                                    Cocriação
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/scora-journey/">
                                                <a className="nav-link">
                                                    Jornada do Cliente
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/sobre-nos/">
                                                <a className="nav-link">
                                                    Sobre Nós
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="https://blog.oncase.com.br">
                                                <a className="nav-link">
                                                    Blog
                                                </a>
                                            </Link>
                                        </li>

                                        {/* <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Produtos <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/scora-journey/"  activeClassName="active">
                                                        <a className="nav-link">Jornada do Cliente</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/scora-acqua" activeClassName="active">
                                                        <a className="nav-link">Saneamento</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/scora-demand" activeClassName="active">
                                                        <a className="nav-link">Previsão de Demanda</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                    </ul>

                                    <div className="others-options">
                                        {/* <Link href="/contato" activeClassName="active"> */}
                                            <a href="/contato/" className="default-btn" style={{color:"#53c8da"}}>
                                                SOLICITE UMA PROPOSTA
                                                <span style={{backgroundColor:"#6c757d",opacity:"0.2"}}></span>
                                            </a>
                                        {/* </Link> */}
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