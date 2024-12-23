import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Shape from '../../images/slider/icon.svg'
import home1 from '../../images/home/Home 1.png'
import home2 from '../../images/home/Home 2.png'
// import ban1 from '../../images/about/ban1.jpeg'
import ban2 from '../../images/about/ban2.jpeg'
import abvc from '../../images/about/abcfww.png'
// import homban from '../../images/about/homban.jpeg'
import homban from '../../images/about/bikewalebhaiyeinframe.png'
import homban3 from '../../images/about/homban3.png'
import homban4 from '../../images/about/homban4.png'
import Frame11 from '../../images/about/Frame11.png'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HeroSlider = () => {

    const settings = {
        autoplay: true,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };

    return (
        <section className="hero-section">
            <Slider {...settings} className="hero-slider">
                <div>
                    <div className="slider-item">
                        <div className="bg-image">
                            <img className="animated" src={ban2} alt=""
                                data-animation-in="zoomInImage" />
                        </div>
                        <div className="container">
                            <div className="content">
                                <h1 className="bg-text">BYHORSE</h1>
                                {/* <h2 className="animated" data-animation-in="fadeInUp">Internation Logistics</h2> */}
                                <h3 className="animated" data-animation-in="fadeInUp">Reliable delivery for business and individual needs </h3>
                                <p className="animated" data-animation-in="fadeInUp">We ensure fast, safe, and efficient transportation, meeting all your shipping needs with real-time tracking and a professional support team.</p>
                                <div className="hero-btn animated" data-animation-in="fadeInUp">
                                    <div className="btn-1">
                                        <Link onClick={ClickHandler} to="/about" className="theme-btn">All Services</Link>
                                    </div>
                                    <div className="btn-2">
                                        <a href="tel:+025757576560" className="call">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            <div className="text">
                                                <span>Call Us Now</span>
                                                <h4>+91 9284720638</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="down-shape">
                            <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                                <path
                                    d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z"
                                    fill="white" />
                                <path
                                    d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z"
                                    fill="white" fillOpacity="0.2" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider-item">
                        <div className="bg-image">
                            <img className="animated" src={homban} alt=""
                                data-animation-in="zoomInImage" />
                        </div>
                        <div className="container">
                            <div className="content">
                                <h1 className="bg-text">BYHORSE</h1>
                                {/* <h2 className="animated" data-animation-in="fadeInUp">Internation Logistics</h2> */}
                                <h3 className="animated" data-animation-in="fadeInUp"> Fast and Reliable Last-Mile Delivery Across Goa and Beyond! </h3>
                                <p className="animated" data-animation-in="fadeInUp"> Get your packages delivered swiftly and safely, right to the doorstep. Our innovative last-mile delivery solutions cater to both businesses and individuals, ensuring a hassle-free experience every time</p>
                                <div className="hero-btn animated" data-animation-in="fadeInUp">
                                    <div className="btn-1">
                                        <Link onClick={ClickHandler} to="/about" className="theme-btn">All Services</Link>
                                    </div>
                                    <div className="btn-2">
                                        <a href="tel:+025757576560" className="call">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            <div className="text">
                                                <span>Call Us Now</span>
                                                <h4>+91 9284720638</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="down-shape">
                            <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                                <path
                                    d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z"
                                    fill="white" />
                                <path
                                    d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z"
                                    fill="white" fillOpacity="0.2" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="slider-item">
                        <div className="bg-image">
                            <img className="animated" src={homban3} alt=""
                                data-animation-in="zoomInImage" />
                        </div>
                        <div className="container">
                            <div className="content">
                                <h1 className="bg-text">BYHORSE</h1>
                                {/* <h2 className="animated" data-animation-in="fadeInUp">Internation Logistics</h2> */}
                                <h3 className="animated" data-animation-in="fadeInUp">Fast, Secure, and Seamless Service </h3>
                                <p className="animated" data-animation-in="fadeInUp"> Experience the convenience of quick and reliable last-mile delivery with BYHORSE. Whether you're a business or an individual, we ensure your packages arrive safely and promptly. Our expert team and smart solutions make deliveries across Goa and beyond easier than ever.</p>
                                <div className="hero-btn animated" data-animation-in="fadeInUp">
                                    <div className="btn-1">
                                        <Link onClick={ClickHandler} to="/about" className="theme-btn">All Services</Link>
                                    </div>
                                    <div className="btn-2">
                                        <a href="tel:+025757576560" className="call">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            <div className="text">
                                                <span>Call Us Now</span>
                                                <h4>+91 9284720638</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="down-shape">
                            <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                                <path
                                    d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z"
                                    fill="white" />
                                <path
                                    d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z"
                                    fill="white" fillOpacity="0.2" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="slider-item">
                        <div className="bg-image">
                            <img className="animated" src={homban4} alt=""
                                data-animation-in="zoomInImage" />
                        </div>
                        <div className="container">
                            <div className="content">
                                <h1 className="bg-text">BYHORSE</h1>
                                {/* <h2 className="animated" data-animation-in="fadeInUp">Internation Logistics</h2> */}
                                <h3 className="animated" data-animation-in="fadeInUp"> Effortless and Timely Delivery Service </h3>
                                <p className="animated" data-animation-in="fadeInUp">Get your deliveries on time, every time, with BYHORSE. Our fast and secure last-mile delivery service ensures that your parcels reach their destination with care. Serving Goa and beyond, we offer hassle-free solutions for businesses and individuals alike.</p>
                                <div className="hero-btn animated" data-animation-in="fadeInUp">
                                    <div className="btn-1">
                                        <Link onClick={ClickHandler} to="/about" className="theme-btn">All Services</Link>
                                    </div>
                                    <div className="btn-2">
                                        <a href="tel:+025757576560" className="call">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            <div className="text">
                                                <span>Call Us Now</span>
                                                <h4>+91 9284720638</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="down-shape">
                            <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                                <path
                                    d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z"
                                    fill="white" />
                                <path
                                    d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z"
                                    fill="white" fillOpacity="0.2" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider-item">
                        <div className="bg-image">
                            <img className="animated" src={Frame11} alt="" data-animation-in="zoomInImage" />
                        </div>
                        <div className="container">
                            <div className="content">
                                <h1 className="bg-text">BYHORSE</h1>
                                {/* <h2 className="animated" data-animation-in="fadeInUp">Global Logistics</h2> */}
                                <h3 className="animated" data-animation-in="fadeInUp"> Fast, Reliable, and Secure Delivery</h3>
                                <p className="animated" data-animation-in="fadeInUp">With BYHORSE, your deliveries are always in safe hands. We provide fast and dependable last-mile delivery services, ensuring your parcels reach their destination on time and in perfect condition. Whether you're a business or an individual, we deliver to Goa and beyond with ease and professionalism.</p>
                                <div className="hero-btn animated" data-animation-in="fadeInUp">
                                    <div className="btn-1">
                                        <Link onClick={ClickHandler} to="/about" className="theme-btn">Discover Our Services</Link>
                                    </div>
                                    <div className="btn-2">
                                        <a href="tel:+025757576560" className="call">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            <div className="text">
                                                <span>Speak to Us</span>
                                                <h4>+91 9284720638</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="down-shape">
                            <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                                <path d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z" fill="white" fillOpacity="0.2" />
                                <path d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z" fill="white" />
                                <path d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z" fill="white" fillOpacity="0.2" />
                                <path d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z" fill="white" fillOpacity="0.2" />
                                <path d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z" fill="white" fillOpacity="0.2" />
                            </svg>
                        </div>
                    </div>
                </div>

            </Slider>
            <div className="track-btn">
                {/* <Link onClick={ClickHandler} to="/tracking"><img src={Shape} alt="" /> Track your shipment</Link> */}
                <Link onClick={ClickHandler} to="/about"><img src={Shape} alt="" /> About Us</Link>
            </div>
        </section>
    );
};

export default HeroSlider;