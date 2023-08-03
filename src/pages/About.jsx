import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import AboutFeatured from '../components/AboutFeatured';
import Approch from '../components/Approch';
import Footer3 from '../components/Footer3';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';
import SkillSet from '../components/SkillSet';
import Sponsors from '../components/Sponsors';
import Timeline from '../components/Timeline';

function About() {
    return (
        <>
            <Header />
            <PageBanner bannerBg={bannerBg} currentPage="About Us" heading="About Us" />
            <AboutFeatured />
            <Approch />
            <SkillSet />
            <Sponsors />
            <Timeline />
            <Footer3 />
        </>
    );
}

export default About;
