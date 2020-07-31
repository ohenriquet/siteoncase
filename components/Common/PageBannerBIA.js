import React, { Component } from 'react';
import Link from 'next/link';

class PageBannerBIA extends Component {
    render() {

        let { pageTitle, breadcrumbTextOne, breadcrumbTextTwo, breadcrumbUrl } = this.props;

        return (
            <div className="page-title-areabi">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>{pageTitle}</h2>
                                <ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBannerBIA;