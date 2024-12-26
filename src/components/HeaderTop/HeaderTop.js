import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ins from '../../images/avatar/instagram.png';
import lin from '../../images/avatar/linkedin (1).png';
import you from '../../images/avatar/youtube.png';

const HeaderTop = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12">
                        <ul className="contact-info">
                            <li>
                                <i className="ti-email"></i><span>info@byhorse.com</span>
                            </li>
                            <li>
                                <a href="tel:+887869587496">
                                    <i className="flaticon-call"></i><span>+91 8700391426</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="contact-into">
                            {/* languages  */}
                            {/* <LanguageSelector/> */}

                            {/* contact */}
                            {/* <div className="pryment-selector">
                                <select>
                                    <option value="usd">USD</option>
                                    <option value="aud">AUD</option>
                                </select>
                            </div> */}

                            <ul className="social-media">
                                <li><span style={{ color: 'black' }}>Follow Us :</span></li>


                                <li>
                                    <a href="https://www.instagram.com/byhorseofficial/" target="_blank" rel="noopener noreferrer">
                                        <img className="image" style={{ height: '20px', width: '20px' }} src={ins} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.linkedin.com/company/byhorse" target="_blank" rel="noopener noreferrer">
                                        <img className="image" style={{ height: '20px', width: '20px' }} src={lin} alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.youtube.com/@BYHorse-k5p" target="_blank" rel="noopener noreferrer">
                                        <img className="image" style={{ height: '25px', width: '25px' }} src={you} alt="" />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;