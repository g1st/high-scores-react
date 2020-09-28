import React from 'react';
import HighScoreTable from './HighScoreTable';

const WorldWideTable = ({ descending, scores }) => {
  const allNamesAndScores = scores
    .reduce((acc, cur) => acc.concat(...cur.scores), [])
    .sort((a, b) => {
      if (descending) {
        return b.s - a.s;
      } else {
        return a.s - b.s;
      }
    });
  return <HighScoreTable name="World Wide" scores={allNamesAndScores} />;
};

export default WorldWideTable;
