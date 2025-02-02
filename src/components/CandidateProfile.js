import React from "react";
import "./CandidateProfile.css";

const CandidateProfile = ({ candidate }) => {
  return (
    <div>
      <h2>{candidate.name}</h2>
      <p>{candidate.description}</p>
      <button>Vote for {candidate.name}</button>
    </div>
  );
};

export default CandidateProfile;
