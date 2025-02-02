import React from "react";
import { Link } from "react-router-dom";

const CandidatesList = ({ candidates }) => {
  return (
    <div>
      <h2>Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <Link to={`/candidate/${candidate.id}`}>{candidate.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidatesList;
