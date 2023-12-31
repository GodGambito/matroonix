import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer3 from '../components/Footer3';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

function Contact() {
    return (
        <>
            <Header />
            <PageBanner bannerBg={bannerBg} heading="Contact Us" currentPage="Contact" />
            <ContactUs />
            <ContactForm title="Write Message" heading="Get In Touch" />
            <Footer3 />
        </>
    );
}

export default Contact;
