import React, { useState, useEffect } from "react";

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
      <div className="tab-buttons">
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
  );
};

const HRManagerTab = () => (
  <div>
    <h2>For HR Managers</h2>
    <p>Content for HR Managers...</p>
  </div>
);

const LineManagerTab = () => (
  <div>
    <h2>For Line Managers</h2>
    <p>Content for Line Managers...</p>
  </div>
);

const EmployeeTab = () => (
  <div>
    <h2>For Employees</h2>
    <p>Content for Employees...</p>
  </div>
);

export default TabComponent;
