
import React, { useState } from 'react';
const DeleteData = () => {

    // State for team name and feedback messages
  const [teamName, setTeamName] = useState("");
  const [message, setMessage] = useState("");

  // Handle the delete action
  const handleDelete = () => {
    if (!teamName) {
      setMessage("Please enter a team name.");
      return;
    }

    // Simulating a delete action (In a real scenario, you'd make an API call or remove from a state)
    const isDeleted = deleteTeamRecord(teamName);
    
    if (isDeleted) {
      setMessage(`Team "${teamName}" has been successfully deleted.`);
    } else {
      setMessage(`Team "${teamName}" not found.`);
    }

    // Clear the input after attempting to delete
    setTeamName("");
  };

  // Simulate deleting a team record (replace with real data management logic)
  const deleteTeamRecord = (name) => {
    // Placeholder: Simulate successful deletion
    // Here, you would check if the team exists in your data and delete it
    const mockTeams = ["Team A", "Team B", "Team C"]; // Example teams
    if (mockTeams.includes(name)) {
      return true; // Simulate successful deletion
    }
    return false; // Simulate team not found
  };
    return (

        <div className="container">
      <h2>Deleted Team Record</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleDelete();
        }}
      >
        <div className="mb-4">
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

        <button type="submit" className="btn btn-danger">
          Delete Team
        </button>
      </form>

      {/* Feedback Message */}
      {message && (
        <div className="mt-3">
          <p>{message}</p>
        </div>
      )}
    </div>
    );
}



export default DeleteData;