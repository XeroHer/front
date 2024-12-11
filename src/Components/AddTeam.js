import React, { useState } from 'react';
import axios from 'axios';

const AddTeam = () => {
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

    const handleChange = (e) => {
        setTeamData({
            ...teamData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const { gamesPlayed, win, draw, loss, points, year } = teamData;
        if (
            !gamesPlayed || !win || !draw || !loss || !points || !year ||
            isNaN(gamesPlayed) || isNaN(win) || isNaN(draw) || isNaN(loss) || isNaN(points) ||
            parseInt(gamesPlayed) < 0 || parseInt(win) < 0 || parseInt(draw) < 0 || parseInt(loss) < 0 || parseInt(points) < 0
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

        // Send the data to the backend using Axios
        axios.post('http://127.0.0.1:3000/api/teams', teamData)
            .then((response) => {
                console.log('Data submitted successfully:', response);
                alert('Team data added successfully!');
                setTeamData({
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
            })
            .catch((error) => {
                console.error('There was an error submitting the data:', error);
                alert('Failed to add team data');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
      <div className="form-container" >
            <h1>Add Team</h1>
            <form onSubmit={handleSubmit}>
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
                        name="win"
                        value={teamData.win}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Draws:</label>
                    <input
                        type="number"
                        name="draw"
                        value={teamData.draw}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Losses:</label>
                    <input
                        type="number"
                        name="loss"
                        value={teamData.loss}
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
                <button type="submit" className="submit-button" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Team'}
                </button>
            </form>
        </div>
    );
};

export default AddTeam;
