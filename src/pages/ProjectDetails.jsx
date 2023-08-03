import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer3 from '../components/Footer3';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';
import PortfolioDetails from '../components/PortfolioDetails';

function ProjectDetails() {
    return (
        <>
            <Header />
            <PageBanner
                bannerBg={bannerBg}
                heading="Portfolio Details"
                currentPage="Portfolio Details"
            />
            <PortfolioDetails />
            <Footer3 />
        </>
    );
}

export default ProjectDetails;
