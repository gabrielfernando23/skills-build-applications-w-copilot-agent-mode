import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', data);
        setLeaderboard(data.results ? data.results : data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <div>
      <h1 className="mb-4">Leaderboard</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{entry.name || '-'}</td>
              <td>{entry.score || '-'}</td>
              <td>{JSON.stringify(entry)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success mt-3">Ver Ranking Completo</button>
    </div>
  );
};

export default Leaderboard;
