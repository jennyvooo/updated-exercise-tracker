import React, { useState, useEffect } from 'react';

const TimerExercise = ({ onReturn }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const selectTime = (minutes) => {
    setSelectedTime(minutes * 60);
    setTime(minutes * 60);
  };

  const startTimer = () => {
    if (selectedTime > 0) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(id);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setTime(selectedTime);
  };

  const resetTimer = () => {
    setTime(selectedTime);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div>
      <h2>Countdown Timer</h2>

      <div>
        <button onClick={() => selectTime(1)} disabled={isRunning}>1 Minute</button>
        <button onClick={() => selectTime(3)} disabled={isRunning}>3 Minutes</button>
        <button onClick={() => selectTime(5)} disabled={isRunning}>5 Minutes</button>
      </div>

      <p>Time Remaining: {Math.floor(time / 60)}:{time % 60 < 10 ? '0' + (time % 60) : time % 60}</p>

      <div>
        {!isRunning ? (
          <button onClick={startTimer} disabled={selectedTime === 0}>Start Timer</button>
        ) : (
          <button onClick={stopTimer}>Stop Timer</button>
        )}
        <button onClick={resetTimer}>Reset Timer</button>
      </div>

      <br />
      <button onClick={onReturn}>Return to Main Menu</button>
    </div>
  );
};

export default TimerExercise;
