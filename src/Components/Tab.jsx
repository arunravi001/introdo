import React, { useState, useEffect } from "react";
import './Tab.css';
import SideTabOneMessageIcon from '../assets/images/tab-left-menu-icon-1-1.svg'
import SideTabOneOnboardIcon from '../assets/images/tab-left-menu-icon-1-2.svg'
import SideTabOneCommunicationIcon from '../assets/images/tab-left-menu-icon-1-3.svg'
import SideTabTwoMessageIcon from '../assets/images/tab-left-menu-icon-2-1.svg'
import SideTabTwoOnboardIcon from '../assets/images/tab-left-menu-icon-2-2.svg'
import SideTabTwoCommunicationIcon from '../assets/images/tab-left-menu-icon-2-3.svg'
import SideTabThreeMessageIcon from '../assets/images/tab-left-menu-icon-3-1.svg'
import SideTabThreeOnboardIcon from '../assets/images/tab-left-menu-icon-3-2.svg'
import SideTabThreeCommunicationIcon from '../assets/images/tab-left-menu-icon-3-3.svg'

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
    }, 500050005000);
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
            <span>{tab}</span>
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
    <div className="clear"></div>
    </div>
  );
};

const HRManagerTab = () => (
  <div className="tab-content-box">
    <div className="tab-left-side-content hr-manager-box">
      <div className="tab-left-side-box"> <p><img src={SideTabOneMessageIcon} alt="Streamline Workforce Management" /> Streamline Workforce Management</p></div>
      <div className="tab-left-side-box"><p><img src={SideTabOneOnboardIcon} alt="Smooth Employee Onboarding" /> Smooth Employee Onboarding</p></div>
      <div className="tab-left-side-box"><p><img src={SideTabOneCommunicationIcon} alt="Enhance Internal Communication" /> Enhance Internal Communication</p></div>
    </div>
    <div className="tab-box-right">
      <p>Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping.</p>
      <p>Simplify onboarding, capture essential employee data and automate payroll for seamless employee experiences.</p>
      <p>Facilitate company-wide communication, keeping everyone in the loop with important announcements, subsidiary changes and HR policy updates.</p>
    </div>
  </div>
);

const LineManagerTab = () => (
  <div className="tab-content-box">
    <div className="tab-left-side-content line-manager-box">
      <div className="tab-left-side-box"> <p><img src={SideTabTwoMessageIcon} alt="Streamline Workforce Management" /> Streamline Workforce Management</p></div>
      <div className="tab-left-side-box"><p><img src={SideTabTwoOnboardIcon} alt="Smooth Employee Onboarding" /> Smooth Employee Onboarding</p></div>
      <div className="tab-left-side-box"><p><img src={SideTabTwoCommunicationIcon} alt="Enhance Internal Communication" /> Enhance Internal Communication</p></div>
    </div>
    <div className="tab-box-center">
    <p>Simplify task management for a boost in team productivity. Clear assignments, monitored deadlines and smoother workflows await!</p>
    <p>Welcome new team members with ease – our automated workflows minimize admin hassle for quick integration into team dynamics.</p>
    <p>Keep the team engaged and informed on project milestones, fostering a positive, motivated environment for collaborative success.</p>
  </div>
  </div>
);

const EmployeeTab = () => (
  <div className="tab-content-box">
    <div className="tab-left-side-content employees-box">
      <div className="tab-left-side-box"> <p><img src={SideTabThreeMessageIcon} alt="Streamline Workforce Management" /> Streamline Workforce Management</p></div>
      <div className="tab-left-side-box"><p><img src={SideTabThreeOnboardIcon} alt="Smooth Employee Onboarding" /> Smooth Employee Onboarding</p></div>
      <div className="tab-left-side-box"><p><img src={SideTabThreeCommunicationIcon} alt="Enhance Internal Communication" /> Enhance Internal Communication</p></div>
    </div>
    <div className="tab-box-left">
    <p>Get clarity on tasks, access key information and perform tasks independently, fostering a culture of trust and ownership.</p>
    <p>Experience a pain-free onboarding experience with timely and accurate payroll processes – a positive start to your new role!</p>
    <p>Stay connected with real-time updates, polls, and surveys through our HRMS for an engaging and informed experience.</p>
  </div>
  </div>
);

export default TabComponent;
