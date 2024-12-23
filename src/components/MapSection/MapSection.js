import React from 'react';

const MapSection = () => {
    return (
        <section className="wpo-map-section">
            <h2 className="hidden">Contact map</h2>
            <div className="wpo-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25688.269599179865!2d73.9264255!3d15.3640715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb0b071d9e8bd%3A0x508c94de89737959!2sVerna%20Industrial%20Estate%2C%20Verna%2C%20Goa!5e1!3m2!1sen!2sin!4v1730802319608!5m2!1sen!2sin" 
                    ></iframe>
            </div>
        </section>
    );
};

export default MapSection;