import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', data);
        setTeams(data.results ? data.results : data);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);

  return (
    <div>
      <h1 className="mb-4">Teams</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{team.name || '-'}</td>
              <td>{JSON.stringify(team)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-warning mt-3">Criar Nova Equipe</button>
    </div>
  );
};

export default Teams;
