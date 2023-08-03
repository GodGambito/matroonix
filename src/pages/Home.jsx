import React from 'react';
import Appointment from '../components/Appointment';
/*import Blog3 from '../components/Blog3';
import Faq2 from '../components/Faq2';*/
import Footer3 from '../components/Footer3';
import Header from '../components/Header';
import Hero3 from '../components/Hero3';
import Portfolio2 from '../components/Portfolio2';
import Process2 from '../components/Process2';
import Services3 from '../components/Services3';
import Sponsors2 from '../components/Sponsors2';
import VideoFeatrued from '../components/VideoFeatured';
import Services1 from '../components/Services1';

function Home() {
    return (
        <>
            <Header />
            <Hero3 />
            <Process2 />
            <Services3 />
            <Services1 />
            <VideoFeatrued />
            {/*<Faq2 />*/}
            <Appointment />
            <Portfolio2 />
            <Sponsors2 />
            {/*<Blog3 />*/}
            <Footer3 />
        </>
    );
}

export default Home;
