import React, { useState } from "react";

const Profile = () => {
  const [description, setDescription] = useState("");
  const [isCandidate, setIsCandidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit candidacy logic
  };

  return (
    <div>
      <h2>Your Profile</h2>
      <textarea
        placeholder="Write a short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => setIsCandidate(true)}>Submit Candidacy</button>
      {isCandidate && <p>You are now a candidate!</p>}
    </div>
  );
};

export default Profile;
