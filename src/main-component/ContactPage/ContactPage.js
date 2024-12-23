import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg';
import Footer from '../../components/footer/Footer';


const ContactPage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle  pagesub={'Contact Us'} />
            <Contactpage />
            
            <CtaSection hclass={'wpo-cta-section'}  />
            <div>
                <div style={{marginBottom:'20px'}}>

                </div>
            </div>
            <MapSection />
             <Footer hclass={'wpo-site-footer'}  />
            <Scrollbar /> 
        </Fragment>
    )
};
export default ContactPage;





