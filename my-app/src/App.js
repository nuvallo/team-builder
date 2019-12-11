import React, { useState } from "react";
import TeamForm from "./components/Team/TeamForm";
import Team from "./components/Team/Team";
import "../src/app.css";
import Navigation from "../src/components/Navigation/navbar";

function App() {
  const [members, setMembers] = useState([
    { name: "Tyler", role: "Student", email: "Nuvallo.inc@gmail.com" }
  ]);
  return (
    <div>
      <Navigation />
      <TeamForm setMembers={setMembers} />
      {members.map(person => (
        <Team key={person.name} person={person} />
      ))}
    </div>
  );
}

export default App;
