import React from 'react';

import PlayerScore from './PlayerScore';

const TableBody = ({ scores }) => {
  return (
    <tbody>
      {scores.map(({ n, s }, i) => (
        <PlayerScore key={i} name={n} score={s} />
      ))}
    </tbody>
  );
};

export default TableBody;
