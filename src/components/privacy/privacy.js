import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivacyPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const policies = {
    privacy: (
      <div>
        <p><b>At Book Your Horse Logistics Private Limited ("ByHorse"), we prioritize your privacy.</b></p>
        <h5>1. Data Collection</h5>
            <p>
          <li>We collect personal data, including name, contact details, and delivery information, when you interact with our website or services.</li>
          </p>
        <h5>2. Data Usage</h5>
        <p>
          <li>Data is used to process orders, improve service quality, and communicate with you.</li>
          <li>ByHorse does not sell or share personal data with third parties unless required by law.</li>
          </p>
        <h5>3. Data Security</h5>
        
        <p>
          <li>We implement industry-standard security measures to protect your data.</li>
          <li>However, no online platform can guarantee 100% security.</li>
          </p>
        <h5>4. Cookies</h5>
        
        <p>
          <li>ByHorse uses cookies to enhance your browsing experience.</li>
          <li>You can control cookie settings through your browser.</li>
          </p>
        <p>For concerns, email us at: <a href="mailto:info@byhorse.com" className="text-decoration-none">info@byhorse.com</a></p>
      </div>
    )
  };

  return (
    <div className="container py-5">
      <ul className="nav nav-tabs justify-content-left mb-3 m-3">
        {Object.keys(policies).map((key) => (
          <li className="nav-item" key={key}>
            <button
              className={`nav-link ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} Policy
            </button>
          </li>
        ))}
      </ul>
      <div className="card p-4 border-0">
        {policies[activeTab]}
      </div>
    </div>
  );
};

export default PrivacyPage;
