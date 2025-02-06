import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [description, setDescription] = useState("");
  const [isCandidate, setIsCandidate] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length < 50) {
      setError("Description should be at least 50 characters long");
      return;
    }
    setError("");
    setIsCandidate(true);
    // Submit candidacy logic
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write a short description about yourself and your qualifications (minimum 50 characters)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" disabled={isCandidate}>
          {isCandidate ? "Candidacy Submitted" : "Submit Candidacy"}
        </button>
      </form>
      {isCandidate && (
        <div className="candidate-status">
          You are now a candidate! Your profile is visible to voters.
        </div>
      )}
    </div>
  );
};

export default Profile;
