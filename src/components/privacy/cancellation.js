import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CancellationPage = () => {
    const [activeTab, setActiveTab] = useState('cancellation');

    const policies = {
        cancellation: (
            <div>
                <p><b>Book Your Horse Logistics PVT LTD ("ByHorse") provides flexibility for cancellations under specific conditions:</b></p>
                <h5>1. Cancellation Requests</h5>
                <p>
                    <li>Cancellations must be initiated at least 2 hours before the scheduled pickup.</li>
                    <li>Late cancellation requests may incur charges.</li>
                </p>
                <h5>2. Refunds on Cancellations</h5>
                <p>
                    <li>Refunds for cancellations will be processed within 7-10 business days, depending on payment method and conditions met.</li>
                </p>
                <h5>3. Non-cancelable Bookings</h5>
                <p>
                    <li>Certain urgent or customized bookings may not be eligible for cancellations.</li>
                </p>
                <p>For cancellations, email us at: <a href="mailto:info@byhorse.com" className="text-decoration-none">info@byhorse.com</a></p>
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

export default CancellationPage;
