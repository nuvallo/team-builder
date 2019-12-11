import React from "react";

function Team(props) {
  const person = props.person;
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{person.name}</CardTitle>
          <CardSubtitle>{person.role}</CardSubtitle>
          <CardText>{person.email}</CardText>
          <Button>Delete Member</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Team;
