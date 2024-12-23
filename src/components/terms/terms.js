import React from 'react';

const TermsPage = () => {
  return (
    <div className="container py-5 p-3">
      <p className="text-center"><b>Welcome to Book Your Horse Logistics PVT LTD ("ByHorse")</b></p>

      <p>
        These Terms and Conditions ("Terms") govern your use of our services, website
        (<a href="https://www.byhorse.com" target="_blank" rel="noopener noreferrer">www.byhorse.com</a>),
        and operations provided by Book Your Horse Logistics PVT LTD ("the Company"). By accessing or using our services,
        you agree to comply with these Terms.
      </p>

      <div className="mb-4">
        <h4>1. General Use</h4>
        <ul>
          <li>Users must provide accurate information while creating accounts or placing orders.</li>
          <li>ByHorse reserves the right to update, change, or modify these Terms at any time without prior notice.</li>
          <li>Continued use of our services constitutes acceptance of the revised Terms.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>2. Prohibited Activities</h4>
        <ul>
          <li>Misuse of our services or website, including fraudulent bookings or unlawful activities, is strictly prohibited.</li>
          <li>Users must not interfere with the website’s functionality or compromise its security.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>3. Liability Disclaimer</h4>
        <ul>
          <li>The Company strives to ensure timely and secure deliveries but cannot guarantee uninterrupted service due to factors beyond its control.</li>
          <li>ByHorse will not be held liable for losses arising from delays, inaccurate information, or customer negligence.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>4. Governing Law</h4>
        <p>
          These Terms are governed by the laws of India. Disputes will be subject to the jurisdiction of the courts in Goa.
        </p>
      </div>

      <p className="text-center">For questions, contact us at: <a href="mailto:info@byhorse.com">info@byhorse.com</a></p>
    </div>
  );
};

export default TermsPage;
