import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Return_page from '../../components/privacy/return';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg';
import Footer from '../../components/footer/Footer';

const ReturnPage = () => {
    return (
        <Fragment>
        <HeaderTop />
        <Navbar hclass={'wpo-site-header'} Logo={Logo} />
        <PageTitle  pagesub={'Return Policy'} />
        <Return_page />
        

         <Footer hclass={'wpo-site-footer'}  />
        <Scrollbar /> 
    </Fragment>
    );
};

export default ReturnPage;