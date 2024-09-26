import React, { useState, useEffect } from 'react';

const TimerComponent = ({ setProgress }) => {
  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          clearInterval(interval);  // Clear the interval after reaching 14:59
          return prevSeconds;
        }
        const newSeconds = prevSeconds + 1;
        setProgress(newSeconds);  // Update the progress bar based on the seconds
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);  // Cleanup the interval when the component unmounts
  }, [setProgress]);

  return (
    <div>
      <h1>
        Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
};
