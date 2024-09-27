import React, { useState, useEffect } from "react";
import './Tab.css';

const TabComponent = () => {
  const tabs = ["For HR Managers", "For Line Managers", "For Employees"];
  const [activeTab, setActiveTab] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Auto-switch every 5 seconds
    startAutoSwitch();
    return () => {
      clearInterval(timer); // Cleanup interval on component unmount
    };
  }, []);

  const startAutoSwitch = () => {
    const newTimer = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length); // Cycle through tabs
    }, 5000);
    setTimer(newTimer);
  };

  const handleTabClick = (index) => {
    clearInterval(timer); // Clear the existing timer
    setActiveTab(index);  // Manually set the active tab
    startAutoSwitch();    // Restart the auto-switch timer
  };

  return (
    <div>
       <div className="benefits-section">
      <div className="container">
        <div className="section-title-wrapper">
        <div className="section-heading"><span>EMPOWER EVERY ROLE</span></div>
        <h2 className="section-title">Triple The Benefits!</h2>
      </div>

      <div className="tab-button">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 0 && <HRManagerTab />}
        {activeTab === 1 && <LineManagerTab />}
        {activeTab === 2 && <EmployeeTab />}
      </div>
    </div>
    </div>
    </div>
  );
};

const HRManagerTab = () => (
  <div>
    <div className="tab-box-right">
      <h2>For HR Managers</h2>
      <p>Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping.</p>
      <p>Simplify onboarding, capture essential employee data and automate payroll for seamless employee experiences.</p>
      <p>Facilitate company-wide communication, keeping everyone in the loop with important announcements, subsidiary changes and HR policy updates.</p>
    </div>
  </div>
);

const LineManagerTab = () => (
  <div>
    <div className="tab-box-center">
    <h2>For Line Managers</h2>
    <p>Simplify task management for a boost in team productivity. Clear assignments, monitored deadlines and smoother workflows await!</p>
    <p>Welcome new team members with ease – our automated workflows minimize admin hassle for quick integration into team dynamics.</p>
    <p>Keep the team engaged and informed on project milestones, fostering a positive, motivated environment for collaborative success.</p>
  </div>
  </div>
);

const EmployeeTab = () => (
  <div>
    <div className="tab-box-left">
    <h2>For Employees</h2>
    <p>Get clarity on tasks, access key information and perform tasks independently, fostering a culture of trust and ownership.</p>
    <p>Experience a pain-free onboarding experience with timely and accurate payroll processes – a positive start to your new role!</p>
    <p>Stay connected with real-time updates, polls, and surveys through our HRMS for an engaging and informed experience.</p>
  </div>
  </div>
);

export default TabComponent;
