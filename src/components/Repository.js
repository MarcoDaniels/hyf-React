import React, { useState } from "react";

export const Repository = ({ name, description }) => {
  const [star, setStar] = useState(0);

  const handleButton = () => {
    setStar(star + 1);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={handleButton}>Star {star}</button>
      <hr />
    </div>
  );
};
