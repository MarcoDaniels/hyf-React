import React from "react";
import { Header } from "./components/Header";
import { Repositories } from "./components/Repositories";
import { Repository } from "./components/Repository";

const repos = [
  {
    name: "My homework",
    description: "It is my homework"
  },
  {
    name: "My Projects",
    description: "It is my projects"
  },
  {
    name: "Your secret project",
    description: "It is secret"
  }
];

const GitHome = () => {
  return (
    <div className="App">
      <Header name="GitHome" />
      <Repositories repos={repos} />
      <Repository name="my new one" description="this is new" />
    </div>
  );
};

export default GitHome;
