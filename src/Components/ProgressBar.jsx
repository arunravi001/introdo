const ProgressBarComponent = ({ progress }) => {
  return (
    <div className="progress-bar-container" style={containerStyle}>
      <div
        className="progress-bar-fill"
        style={{ ...progressStyle, width: `${progress}%` }}
      ></div>
    </div>
  );
};

// Styles
const containerStyle = {
  height: '30px',
  width: '100%',
  backgroundColor: '#e0e0df',
  borderRadius: '50px',
  overflow: 'hidden',
};

const progressStyle = {
  height: '100%',
  backgroundColor: '#76c7c0',
  transition: 'width 0.5s ease',
};

const TimerWithProgress = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <TimerComponent setProgress={setProgress} />
      <ProgressBarComponent progress={progress} />
    </div>
  );
};

export default TimerWithProgress;