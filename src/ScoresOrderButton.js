import React from 'react';

const ScoresOrderButton = ({ handleClick, descending }) => {
  return (
    <div className="order">
      <button className="btn" onClick={handleClick}>
        Order scores {descending ? 'ascending' : 'descending'}
      </button>
    </div>
  );
};

export default ScoresOrderButton;
