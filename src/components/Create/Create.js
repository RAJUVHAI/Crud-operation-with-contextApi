import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Create() {
  const [users, setUsers] = useContext(UserContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const updateId = (e) => {
    setId(e.target.value);
  };
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePosition = (e) => {
    setPosition(e.target.value);
  };
  const updateSalary = (e) => {
    setSalary(e.target.value);
  };
  const addUser = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      { id: id, name: name, position: position, salary: salary },
    ]);
    alert("Student inserted!");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="bg-light my-3 p-5">
              <Form onSubmit={addUser}>
                <h1 className="text-center my-2"> Create Students </h1>
                <Form.Group className="mb-3" controlId="formBasicId">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={id}
                    onChange={updateId}
                    placeholder="Enter students id"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={updateName}
                    placeholder="Enter students name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPosition">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    value={position}
                    onChange={updatePosition}
                    placeholder="Enter students position"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="number"
                    value={salary}
                    onChange={updateSalary}
                    placeholder="Enter students salary"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create
                </Button>
                <Link to="/">
                  <Button className="mx-2" variant="primary" type="submit">
                    Back to home
                  </Button>
                </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Create;
