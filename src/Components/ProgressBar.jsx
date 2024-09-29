import React from 'react';
import './ProgressBar.css';
const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: '100%', padding: '10px 0', position: 'relative' }}>
      <div style={{ width: '100%', backgroundColor: '#e0e0df', height: '8px', borderRadius: '8px' }}>
        <div
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(126.9deg, #FC1777 -9.7%, #3A86FF 140.79%)',
            height: '100%',
            borderRadius: '8px',
            transition: 'width 1s linear', // Smooth transition
          }}
        ></div>
      </div>   

      <div className="hours-worked-percentage">
        <span> {Math.round(progress)}% </span>
      </div>
    </div>
  );
};

export default ProgressBar;
