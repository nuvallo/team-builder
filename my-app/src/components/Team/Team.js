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
        <CardTitle>Name: {person.name}</CardTitle>
        <CardSubtitle>Role: {person.role}</CardSubtitle>
        <CardText>Email: {person.email}</CardText>
        <Button>Remove Member</Button>
      </CardBody>
    </Card>
  );
}

export default Team;
