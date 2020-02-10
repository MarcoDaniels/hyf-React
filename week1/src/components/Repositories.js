import React from "react";
import { Repository } from "./Repository";

export const Repositories = ({ repos }) => {
  return (
    <div>
      <h2>List of repositories</h2>
      <div>
        {repos.map((repo, key) => (
          <Repository
            key={key}
            name={repo.name}
            description={repo.description}
          />
        ))}
      </div>
    </div>
  );
};
