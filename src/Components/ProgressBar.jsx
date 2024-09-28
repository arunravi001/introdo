import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0df', height: '8px', borderRadius: '5px' }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: '#3b82f6',
          height: '100%',
          borderRadius: '5px',
          transition: 'width 1s linear', // Smooth transition
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
