import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function Team(props) {
  const person = props.person;
  return (
    <Container>
      <div>
        <Card className="card">
          <CardBody>
            <CardTitle>Name: {person.name}</CardTitle>
            <CardSubtitle>Role: {person.role}</CardSubtitle>
            <CardText>Email: {person.email}</CardText>
            <Button>Delete Member</Button>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}

export default Team;
