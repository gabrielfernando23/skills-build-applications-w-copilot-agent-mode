import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', data);
        setActivities(data.results ? data.results : data);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <div>
      <h1 className="mb-4">Activities</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{activity.name || '-'}</td>
              <td>{JSON.stringify(activity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3">Adicionar Atividade</button>
    </div>
  );
};

export default Activities;
