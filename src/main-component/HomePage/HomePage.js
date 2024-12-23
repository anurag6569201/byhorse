import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import GetQuateSection from '../../components/GetQuateSection/GetQuateSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import MapSection from '../../components/MapSection/MapSection.js';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <HeroSlider />
            <About hclass={'wpo-about-section'} />
            <ServiceSection hclass={"wpo-service-section section-padding"} SectionTitleShow={true} ServiceBtn={true} />
            <FunFact hclass={'wpo-funfact-section section-padding'} />
            <GetQuateSection hclass={'wpo-get-quate-section section-padding'}/>
            <FeaturesSection hclass={'wpo-features-section section-padding'}/>
            <ProcessSection hclass={'wpo-process-section section-padding'}/>
            <ProjectSection hclass={'wpo-project-section section-padding'} SectionTitleShow={true} projectBtn={true} />
            <Testimonial hclass={'wpo-testimonial-section section-padding'} />
            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            <CtaSection hclass={'wpo-cta-section'}  />
            <div>
                <div style={{marginBottom:'20px'}}>
                </div>
            </div>
            {/* <TeamSection hclass={'wpo-team-section section-padding'} /> */}
            {/* <BlogSection hclass={'wpo-blog-section section-padding'}/> */}
            <MapSection/>
            <Footer hclass={'wpo-site-footer'}  />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;