import React from 'react';

import HighScoresTable from './HighScoreTable';
import scores from './scores';

function App() {
  return (
    <div className="App">
      <h1 className="title">High Scores per Country</h1>
      {scores.map(({ name, scores }, index) => (
        <HighScoresTable key={index} name={name} scores={scores} />
      ))}
    </div>
  );
}

export default App;
