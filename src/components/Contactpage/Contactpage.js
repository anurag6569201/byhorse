import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
// import Img01 from '../../images/contact-left-img.jpg'
import four from '../../images/about/1.png'



const Contactpage = () => {

    return (
        <div>

            <section className="wpo-contact-page section-padding">
                <div className="container">
                    <div className="office-info">
                        <div className="row">
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-location-1"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Address</h2>
                                        <p>M50-54, Phase lll B,
                                            Verna Industrial Estate,
                                            Verna, Goa
                                           </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item active">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Phone Number</h2>
                                        <p>+91 9284720638<br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-email"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Contact</h2>
                                        <p>info@byhorse.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="contact-left">
                                    <h2>Get in touch</h2>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                                        faucibus odio feugiat arc dolor.</p> */}
<h3> Ready to transform your logistics with ByHorse?</h3>
                                    <p>
                                    Our team is here to provide customized delivery solutions tailored to your unique needs. Sign up today or contact us to learn more.</p>
                                    <img className="image" src={four} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="contact-right">
                                    <div className="title">
                                        <h2>Fill Up The Form</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

        </div >
    )


}

export default Contactpage;
