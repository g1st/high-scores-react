import React from 'react';

import TableBody from './TableBody';

const HighScoreTable = ({ name, scores }) => {
  return (
    <div className="highscore-table">
      <table>
        <thead>
          <tr>
            <th colSpan="2" className="table-title">
              HIGH SCORES: {name}
            </th>
          </tr>
        </thead>
        <TableBody scores={scores} />
      </table>
    </div>
  );
};

export default HighScoreTable;
