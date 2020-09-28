import React, { useState } from 'react';

import HighScoresTable from './HighScoreTable';
import WorldWideTable from './WorldWideTable';
import ScoresOrderButton from './ScoresOrderButton';
import scores from './scores';

function App() {
  const [descending, setDescending] = useState(true);

  const toggleScoreOrder = () => {
    setDescending(!descending);
  };

  return (
    <div className="App">
      <h1 className="title">High Scores per Country</h1>
      <ScoresOrderButton
        handleClick={toggleScoreOrder}
        descending={descending}
      />
      <WorldWideTable descending={descending} scores={scores} />
      {scores
        // sort by name
        .sort((a, b) => a.name.localeCompare(b.name))
        // sort by score
        .map((item) => ({
          ...item,
          scores: item.scores.sort((a, b) => {
            if (descending) {
              return b.s - a.s;
            } else {
              return a.s - b.s;
            }
          }),
        }))
        .map(({ name, scores }, index) => (
          <HighScoresTable key={index} name={name} scores={scores} />
        ))}
    </div>
  );
}

export default App;
