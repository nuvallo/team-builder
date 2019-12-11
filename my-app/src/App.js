import React, { useState } from "react";
import TeamForm from "./components/Team/TeamForm";
import Team from "./components/Team/Team";
import "../src/app.css";

function App() {
  const [members, setMembers] = useState([
    { name: "Tyler", role: "Student", email: "Nuvallo.inc@gmail.com" }
  ]);
  return (
    <div>
      <TeamForm setMembers={setMembers} />
      {members.map(person => (
        <Team key={person.name} person={person} />
      ))}
    </div>
  );
}

export default App;
