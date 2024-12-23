import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReturnPage = () => {
    const [activeTab, setActiveTab] = useState('return');

    const policies = {
        return: (
            <div>
                <p><b>Book Your Horse Logistics PVT LTD ("ByHorse") aims to ensure customer satisfaction.</b></p>
                <h5>1. Eligibility for Returns</h5>
                <p>
                    <li>Returns are applicable only for damaged or incomplete deliveries, reported within 24 hours of receipt.</li>
                </p>
                <h5>2. Refund Process</h5>
                <p>
                    <li>Refunds will be processed within 7-10 business days upon approval after reviewing the issue.</li>
                    <li>Refunds will be credited to the original payment method.</li>
                </p>
                <h5>3. Non-refundable Services</h5>
                <p>
                    <li>Completed logistics services and canceled bookings after pickup initiation are non-refundable.</li>
                </p>
                <p>For assistance, email us at: <a href="mailto:info@byhorse.com" className="text-decoration-none">info@byhorse.com</a></p>
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

export default ReturnPage;
