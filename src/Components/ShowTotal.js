import React, { useState } from "react";

const ShowTotal = () => {
  // State to store team data
  const [teamName, setTeamName] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [draws, setDraws] = useState(0);
  const [wins, setWins] = useState(0);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (teamName.trim() === "") {
      alert("Please enter a team name.");
      return;
    }

    if (gamesPlayed < 0 || draws < 0 || wins < 0) {
      alert("Games played, draws, and wins cannot be negative.");
      return;
    }

    // For now, you can just log the values or display them in the UI.
    alert(`Team: ${teamName}\nGames Played: ${gamesPlayed}\nDraws: ${draws}\nWins: ${wins}`);

    // Reset form after submission
    setTeamName("");
    setGamesPlayed(0);
    setDraws(0);
    setWins(0);
  };

  return (
    <div className="container">
      <h2>Football Team</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="teamName" className="form-label">
            Team Name
          </label>
          <input
            type="text"
            className="form-control"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gamesPlayed" className="form-label">
            Total Games Played
          </label>
          <input
            type="number"
            className="form-control"
            id="gamesPlayed"
            value={gamesPlayed}
            onChange={(e) => setGamesPlayed(Number(e.target.value))}
            required
            min="0"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="draws" className="form-label">
            Total Draws
          </label>
          <input
            type="number"
            className="form-control"
            id="draws"
            value={draws}
            onChange={(e) => setDraws(Number(e.target.value))}
            required
            min="0"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="wins" className="form-label">
            Total Wins
          </label>
          <input
            type="number"
            className="form-control"
            id="wins"
            value={wins}
            onChange={(e) => setWins(Number(e.target.value))}
            required
            min="0"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {teamName && (
        <div className="mt-4">
          <h3>Team Summary</h3>
          <p>
            <strong>Team Name:</strong> {teamName}
          </p>
          <p>
            <strong>Total Games Played:</strong> {gamesPlayed}
          </p>
          <p>
            <strong>Total Draws:</strong> {draws}
          </p>
          <p>
            <strong>Total Wins:</strong> {wins}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowTotal;
