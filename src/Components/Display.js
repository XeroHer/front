import React, { useState, useEffect } from 'react';
const mockData = [
  
    { id: 15, teamName: 'Team O', gamesPlayed: 18, draws: 8, wins: 10 },
  ];

const Display = () => {
    const [records, setRecords] = useState([]);

  useEffect(() => {
    // Simulate fetching data (you can replace this with an API call or database query)
    const first10Records = mockData.slice(0, 10);
    setRecords(first10Records);
  }, []);

    return (

        <div className="container">
      <h2>Top 10 Team Records</h2>

      {records.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Games Played</th>
              <th>Draws</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.teamName}</td>
                <td>{record.gamesPlayed}</td>
                <td>{record.draws}</td>
                <td>{record.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records available.</p>
      )}
    </div>
    );
}


export default Display;