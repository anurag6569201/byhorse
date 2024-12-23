import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShippingPage = () => {
  const [activeTab, setActiveTab] = useState('shipping');

  const policies = {
    shipping: (
      <div>
        <p><b>At Book Your Horse Logistics PVT LTD ("ByHorse"), we ensure reliable and timely deliveries for all our customers.</b></p>
        <h5>1. Delivery Timelines</h5>
        <p>
          <li>Standard deliveries are processed within 24-48 hours after booking confirmation.</li>
          <li>Delivery timelines may vary based on location and external factors.</li>
        </p>
        <h5>2. Shipping Costs</h5>
        <p>
          <li>Shipping charges depend on the distance and package weight, calculated during booking.</li>
        </p>
        <h5>3. Undelivered Packages</h5>
        <p>
          <li>If delivery fails due to incorrect addresses or unavailability, the customer may be charged for redelivery.</li>
        </p>
        <p>For shipping queries, contact us at: <a href="mailto:info@byhorse.com" className="text-decoration-none">info@byhorse.com</a></p>
      </div>
    )
  };

  return (
    <div className="container py-5">
      <ul className="nav nav-tabs justify-content-left m-3 mb-3">
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

export default ShippingPage;
