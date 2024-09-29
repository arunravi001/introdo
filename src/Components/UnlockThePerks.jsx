import React, { useState } from 'react';
import './UnlockThePerks.css';
import Timer from './Timer'; // Import Timer component
import ProgressBar from './ProgressBar'; // Import ProgressBar component
import GpsPayroll from '../assets/images/gps-payroll.png'
import LegacyHarmony from '../assets/images/lh-image.png'
import RsCompliance from '../assets/images/rsc-image.png'
import CloudPowered from '../assets/images/cps-image.png'

const UnlockThePerks = () => {
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = (seconds) => {
    const totalSeconds = 899 - 840; // 59 seconds total from 14:00 to 14:59
    const currentProgress = ((seconds - 840) / totalSeconds) * 100; // Calculate percentage
    setProgress(currentProgress); // Set progress
  };

  return (
    <div>
    <div className="utp-sec">
      <div className="container">
        <div className="section-title-wrapper">
        <div className="section-heading"><span>WHY INTRODO?</span></div>
        <h2 className="section-title">Unlock The Perks!</h2>
      </div>

      <div className="flex-container">
      <div className="card orange-gradient">
      <h2>Global Payroll Simplicity</h2>
        <p>Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!</p>
        <div className="payroll">
          <img src={GpsPayroll} alt="GPS Payroll" />
        </div>
      </div>

      <div className="card">
      <div className="purple-gradient">
        <div className="user-info">
          <div className="details">
            <h3>Fatima Saleem</h3>
            <p>Aug 07, 2024 - Aug 15, 2024</p>            
            <p className="hours">Hours Worked: <strong>14:36 Hours</strong></p>

            <div style={{ textAlign: 'center', width: '200px', margin: '0 auto' }}>
            <Timer onTimeUpdate={handleTimeUpdate} /> {/* Timer component */}
            <ProgressBar progress={progress} /> {/* ProgressBar component */}
          </div>

          </div>
        </div>
      </div>

      <div className=" blue-gradient">
      <h2>Smart Insights</h2>
      <p>Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.</p>
        <div className="tools">
          
        </div>
      </div>
      </div>

      
      <div className="card pink-gradient">
      <h2>Legacy Harmony</h2>
      <p>Maximize operational efficiency with zero data loss. Sync all your business tools with an open API for seamless data integration.</p>
        <div className="badges">
          <img src={LegacyHarmony} alt="GPS Payroll" />
        </div>
      </div>

      <div className="card light-blue-gradient">
      <div className="rsc-box">
        <div className="rsc-text">
          <h2>Rock-Solid Compliance</h2>
          <p>Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.</p>
        </div>
        <div className="rsc-image">
          <img src={RsCompliance} alt="Rock-Solid Compliance" />
        </div>
        </div>
      </div>

      

      <div className="card purple-blue-gradient">
      <div className="cps-box">
        <div className="cps-image">
          <img src={CloudPowered} alt="Cloud-Powered Savings" />
        </div>
        <div className="cps-text">
        <h2>Cloud-Powered Savings</h2>
        <p>Centralize people management with one HR software. Save time and cut costs by leveraging cloud technology.</p>
        </div>
        </div>
      </div>

      </div>
      
      
    </div>
    </div>

</div>
  );
};

export default UnlockThePerks;
