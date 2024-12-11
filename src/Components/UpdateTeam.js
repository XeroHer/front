import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateTeam = ({ teamId }) => {
  const [teamData, setTeamData] = useState({
    team: '',
    gamesPlayed: '',
    win: '',
    draw: '',
    loss: '',
    goalsFor: '',
    goalsAgainst: '',
    points: '',
    year: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch current team data when the component mounts (or teamId changes)
    if (teamId) {
      axios.get(`http://localhost:5000/api/teams/${teamId}`)
        .then((response) => {
          setTeamData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching team data:', error);
        });
    }
  }, [teamId]);

  const handleChange = (e) => {
    setTeamData({
      ...teamData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { gamesPlayed, win, draw, loss, point, year } = teamData;
    if (
      !gamesPlayed || !win || !draw || !loss || !point || !year ||
      isNaN(gamesPlayed) || isNaN(win) || isNaN(draw) || isNaN(loss) || isNaN(point) ||
      parseInt(gamesPlayed) < 0 || parseInt(wins) < 0 || parseInt(draws) < 0 || parseInt(losses) < 0 || parseInt(points) < 0
    ) {
      alert('Please enter valid, non-negative numbers for all fields.');
      return false;
    }
    if (year.length !== 4 || isNaN(year)) {
      alert('Please enter a valid 4-digit year.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Send the updated data to the backend using Axios
    axios.put(`http://localhost:5000/api/teams/${teamId}`, teamData)
      .then((response) => {
        console.log('Data updated successfully:', response);
        alert('Team data updated successfully!');
      })
      .catch((error) => {
        console.error('There was an error submitting the data:', error);
        alert('Failed to update team data');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="form-container" >
      <h1>Update Team </h1>
      <form onSubmit={handleSubmit} className="team-form">
        <div className="form-group">
          <label>Team Name:</label>
          <input
            type="text"
            name="team"
            value={teamData.team}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Games Played:</label>
          <input
            type="number"
            name="gamesPlayed"
            value={teamData.gamesPlayed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Wins:</label>
          <input
            type="number"
            name="wins"
            value={teamData.wins}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Draws:</label>
          <input
            type="number"
            name="draws"
            value={teamData.draws}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Losses:</label>
          <input
            type="number"
            name="losses"
            value={teamData.losses}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Goals For:</label>
          <input
            type="number"
            name="goalsFor"
            value={teamData.goalsFor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Goals Against:</label>
          <input
            type="number"
            name="goalsAgainst"
            value={teamData.goalsAgainst}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Points:</label>
          <input
            type="number"
            name="points"
            value={teamData.points}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={teamData.year}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit"  className="submit-button" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Team'}
        </button>
      </form>
    </div>
  );
};

export default UpdateTeam;
