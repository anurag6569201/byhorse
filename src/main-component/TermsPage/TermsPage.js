import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Terms_page from '../../components/terms/terms';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg';
import Footer from '../../components/footer/Footer';

const TermsPage = () => {
    return (
        <Fragment>
        <HeaderTop />
        <Navbar hclass={'wpo-site-header'} Logo={Logo} />
        <PageTitle  pagesub={'Terms & Conditions'} />
        <Terms_page />
        

         <Footer hclass={'wpo-site-footer'}  />
        <Scrollbar /> 
    </Fragment>
    );
};

export default TermsPage;