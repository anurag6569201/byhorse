import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from '../../images/logoss/Dressup 1.png';
import logo2 from '../../images/logoss/everest 1.png';
import logo3 from '../../images/logoss/image 3.png';
import logo6 from '../../images/logoss/image 6.png';
import logo7 from '../../images/logoss/image 7.png';
import logo8 from '../../images/logoss/image 8.png';
import logo9 from '../../images/logoss/laundry 1.png';


const PartnersSection = (props) => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    };


    return (
        <section className={"" + props.CollClass}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <Slider {...settings} className='partner-grids partners-slider'>
                            <div className="grid">
                                <img src={logo1} alt="" />
                            </div>
                            <div className="grid">
                                <img src={logo2} alt="" />
                            </div>
                            <div className="grid">
                                <img src={logo3} alt="" />
                            </div>
                            <div className="grid">
                                <img src={logo6} alt="" />
                            </div>
                            <div className="grid">
                                <img src={logo7} alt="" />
                            </div>
                            <div className="grid">
                                <img src={logo8} alt="" />
                            </div>
                            <div className="grid">
                                <img src={logo9} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;




