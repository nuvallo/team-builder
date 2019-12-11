import React, { useState } from "react";
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function TeamForm(props) {
  const [person, setPerson] = useState({ name: "", role: "", email: "" });

  // Handlers
  const mainHandler = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
    console.log(person);
  };

  return (
    <Container>
      <Form>
        <FormGroup row>
          <Label for="fullName" sm={2}>
            Full Name
          </Label>
          <Col sm={10}>
            <Input
              onChange={mainHandler}
              type="text"
              name="name"
              id="fullName"
              placeholder="Enter Full Name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="role" sm={2}>
            Select
          </Label>
          <Col sm={10}>
            <Input onChange={mainHandler} type="select" name="role" id="role">
              <option>Student</option>
              <option>Tech Lead</option>
              <option>Section Lead</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              onChange={mainHandler}
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </Col>
        </FormGroup>
        <Button type="submit">Add Member</Button>
      </Form>
    </Container>
  );
}

export default TeamForm;
