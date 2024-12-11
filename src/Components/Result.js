import React, { useState } from "react";

// Simulated team data (replace this with actual data or API call)
const mockTeamData = [
  { id: 1, teamName: 'Team A', year: 2023, gamesPlayed: 10, goalsFor: 25, goalsAgainst: 15, wins: 6, draws: 2, losses: 2, goalDifference: 10, points: 20 },
  { id: 2, teamName: 'Team B', year: 2023, gamesPlayed: 12, goalsFor: 30, goalsAgainst: 20, wins: 7, draws: 3, losses: 2, goalDifference: 10, points: 24 },
  { id: 3, teamName: 'Team C', year: 2023, gamesPlayed: 8, goalsFor: 18, goalsAgainst: 14, wins: 4, draws: 3, losses: 1, goalDifference: 4, points: 15 },
  { id: 4, teamName: 'Team D', year: 2023, gamesPlayed: 15, goalsFor: 40, goalsAgainst: 25, wins: 10, draws: 3, losses: 2, goalDifference: 15, points: 33 },
  { id: 5, teamName: 'Team E', year: 2023, gamesPlayed: 9, goalsFor: 22, goalsAgainst: 18, wins: 5, draws: 3, losses: 1, goalDifference: 4, points: 18 },
  { id: 6, teamName: 'Team F', year: 2023, gamesPlayed: 20, goalsFor: 55, goalsAgainst: 30, wins: 14, draws: 4, losses: 2, goalDifference: 25, points: 46 },
  { id: 7, teamName: 'Team G', year: 2023, gamesPlayed: 18, goalsFor: 35, goalsAgainst: 22, wins: 9, draws: 6, losses: 3, goalDifference: 13, points: 33 },
  { id: 8, teamName: 'Team H', year: 2023, gamesPlayed: 5, goalsFor: 12, goalsAgainst: 10, wins: 3, draws: 1, losses: 1, goalDifference: 2, points: 10 },
  { id: 9, teamName: 'Team I', year: 2023, gamesPlayed: 13, goalsFor: 28, goalsAgainst: 19, wins: 6, draws: 4, losses: 3, goalDifference: 9, points: 22 },
  { id: 10, teamName: 'Team J', year: 2023, gamesPlayed: 7, goalsFor: 17, goalsAgainst: 13, wins: 4, draws: 2, losses: 1, goalDifference: 4, points: 14 },
  // More teams data...
];
const Result = () => {

    const [year, setYear] = useState(""); // Year input by the user
  const [averageGoalFor, setAverageGoalFor] = useState(null); // The filtered list of teams
  const [filteredTeams, setFilteredTeams] = useState([]); // Teams to display after filtering
  const [message, setMessage] = useState(""); // Message to display if no data found

  // Handle form submission to filter teams by year and average goal for
  const handleFilter = (e) => {
    e.preventDefault();

    if (!year) {
      setMessage("Please enter a year.");
      return;
    }

    // Filter teams for the selected year
    const teamsForYear = mockTeamData.filter((team) => team.year === parseInt(year));

    if (teamsForYear.length === 0) {
      setMessage("No teams found for the given year.");
      return;
    }

    // Calculate the average "Goal For" for the filtered teams
    const totalGoalsFor = teamsForYear.reduce((acc, team) => acc + team.goalsFor, 0);
    const avgGoalsFor = totalGoalsFor / teamsForYear.length;

    // Filter teams whose "Goal For" is greater than or equal to the average
    const teamsAboveAverage = teamsForYear.filter((team) => team.goalsFor >= avgGoalsFor);

    setFilteredTeams(teamsAboveAverage);
    setAverageGoalFor(avgGoalsFor); // Display the average Goal For
    setMessage(""); // Reset any error message
  };

    return(

        <div className="container">
        <h2>Teams with Goal For = Average for Year</h2>
  
        <form onSubmit={handleFilter}>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Enter Year
            </label>
            <input
              type="number"
              className="form-control"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Show Teams
          </button>
        </form>
  
        {message && <p className="text-danger mt-3">{message}</p>}
  
        {averageGoalFor !== null && (
          <p>
            <strong>Average "Goal For" for {year}: </strong> {averageGoalFor.toFixed(2)}
          </p>
        )}
  
        {filteredTeams.length > 0 ? (
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Year</th>
                <th>Games Played</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>Goal Difference</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeams.map((team) => (
                <tr key={team.id}>
                  <td>{team.teamName}</td>
                  <td>{team.year}</td>
                  <td>{team.gamesPlayed}</td>
                  <td>{team.goalsFor}</td>
                  <td>{team.goalsAgainst}</td>
                  <td>{team.wins}</td>
                  <td>{team.draws}</td>
                  <td>{team.losses}</td>
                  <td>{team.goalDifference}</td>
                  <td>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No teams match the criteria.</p>
        )}
      </div>
    );
}



export default Result;