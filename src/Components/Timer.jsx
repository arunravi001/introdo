import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeUpdate }) => {
  const [seconds, setSeconds] = useState(840); // Starting from 14:00

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev < 899) {
          return prev + 1;
        } else {
          clearInterval(interval); // Stop at 14:59
          return prev;
        }
      });
    }, 1000); // Every second
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    onTimeUpdate(seconds); // Update the parent with the current time
  }, [seconds, onTimeUpdate]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <span>
      {formatTime(seconds)}
    </span>
  );
};

export default Timer;
