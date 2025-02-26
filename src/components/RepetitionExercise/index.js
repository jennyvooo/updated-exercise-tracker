import React, { useState } from 'react';

const RepetitionExercise = ({ name, onReturn }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Repetitions: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={onReturn}>Return to Main Menu</button>
    </div>
  );
};

export default RepetitionExercise;
