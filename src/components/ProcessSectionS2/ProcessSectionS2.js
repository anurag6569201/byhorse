import React from 'react';
import Shape from '../../images/process-arrow-shape.svg'

const ProcessSectionS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="wrape">
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-order"></i>
                            <span>01</span>
                        </div>
                        <h2>Enter your product Details</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-boxes"></i>
                            <span>02</span>
                        </div>
                        <h2>Pay your Service Tag</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-product-return-1"></i>
                            <span>03</span>
                        </div>
                        <h2>Ready to go Your Goods</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-truck"></i>
                            <span>04</span>
                        </div>
                        <h2>Delivery your product</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProcessSectionS2;