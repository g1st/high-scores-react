import React from 'react';

const ScoresOrderButton = ({ handleClick, descending }) => {
  return (
    <button onClick={handleClick}>
      Order scores {descending ? 'ascending' : 'descending'}
    </button>
  );
};

export default ScoresOrderButton;
