import React from "react";

const Results = ({ candidates }) => {
  const sortedCandidates = candidates.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h2>Election Results</h2>
      <ul>
        {sortedCandidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name} - {candidate.votes} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
