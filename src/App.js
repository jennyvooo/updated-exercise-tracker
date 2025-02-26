import React, { useState } from 'react';
import './App.css';

import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import TimerExercise from './components/TimerExercise';

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);

  const handleExerciseClick = (type) => {
    setCurrentExercise(type);
  };

  const handleReturn = () => {
    setCurrentExercise(null);
  };

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      {!currentExercise ? (
        <div>
          <button onClick={() => handleExerciseClick('repetition')}>
            Repetition Exercise
          </button>
          <button onClick={() => handleExerciseClick('duration')}>
            Duration Exercise
          </button>
          <button onClick={() => handleExerciseClick('timer')}>
            Countdown Timer
          </button>
        </div>
      ) : currentExercise === 'repetition' ? (
        <RepetitionExercise name="Push-ups" onReturn={handleReturn} />
      ) : currentExercise === 'duration' ? (
        <DurationExercise name="Running" onReturn={handleReturn} />
      ) : (
        <TimerExercise onReturn={handleReturn} />
      )}
    </div>
  );
}

export default App;
