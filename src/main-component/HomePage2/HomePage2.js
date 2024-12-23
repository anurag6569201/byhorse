import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Hero2 from '../../components/hero2/Hero2';
import TrackSection from '../../components/TrackSection/TrackSection';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import AboutS2 from '../../components/aboutS2/aboutS2';
import RequestQuateSection from '../../components/RequestQuateSection/RequestQuateSection';
import ProcessSectionS2 from '../../components/ProcessSectionS2/ProcessSectionS2';
import FeaturesSectionS2 from '../../components/FeaturesSectionS2/FeaturesSectionS2';
import PricingSection from '../../components/PricingSection/PricingSection';
import ProjectTestimonialSection from '../../components/ProjectTestimonialSection/ProjectTestimonialSection';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import GetTouchSection from '../../components/GetTouchSection/GetTouchSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo-2.svg'

const HomePage2 = () => {
    return (
        <Fragment>
            <NavbarS2 Logo={Logo} />
            <Hero2 />
            <TrackSection />
            <ServiceSectionS2 hclass={"wpo-service-section-s2 section-padding"} />
            <FunFactS2 hclass={'wpo-funfact-section-s2 section-padding'} />
            <AboutS2 />
            <RequestQuateSection hclass={'wpo-video-section-s2'} />
            <ProcessSectionS2 hclass={'wpo-process-section-s2'} />
            <FeaturesSectionS2 hclass={'wpo-features-section-s2'} />
            <PricingSection hclass={'wpo-pricing-section section-padding'} />
            <ProjectTestimonialSection />
            <PartnersSection CollClass={'wpo-partner-section-s2 section-padding'} />
            <FaqSection hclass={'wpo-faq-section section-padding'} />
            <BlogSectionS2 />
            <GetTouchSection hclass={'wpo-get-touch-section section-padding'} />
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;