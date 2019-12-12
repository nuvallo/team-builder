import React from "react";
import {
  Container,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function Team(props) {
  const person = props.person;

  return (
    <Card>
      <CardBody>
        <CardTitle className="card-title">{person.name}</CardTitle>
        <CardSubtitle>
          <span className="em">Role:</span> {person.role}
        </CardSubtitle>
        <CardText>
          {" "}
          <span className="em">Email:</span> {person.email}
        </CardText>
        <Button>Remove Member</Button>
      </CardBody>
    </Card>
  );
}

export default Team;
