import React from 'react';

const PlayerScore = ({ name, score }) => {
  return (
    <tr>
      <td className="player-name">{name}</td>
      <td className="player-score">{score}</td>
    </tr>
  );
};

export default PlayerScore;
