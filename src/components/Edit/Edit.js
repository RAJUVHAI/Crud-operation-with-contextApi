import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Edit() {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);
  const [name, setName] = useState(user[0].name);
  const [position, setPosition] = useState(user[0].position);
  const [salary, setSalary] = useState(user[0].salary);

  const updateName = (e) => {
    e.preventDefault();
    setName(e.target.value);
    const editedName = name;
    user[0].name = editedName;
  };
  const updatePosition = (e) => {
    e.preventDefault();
    setPosition(e.target.value);
    const editedPosition = position;
    user[0].position = editedPosition;
  };
  const updateSalary = (e) => {
    e.preventDefault();
    setSalary(e.target.value);
    const editedSalary = salary;
    user[0].Salary = editedSalary;
  };
  const updateUser = (e) => {
    e.preventDefault();
    setUsers([...users]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="bg-light my-3 p-5">
              <Form>
                <h1 className="text-center my-2"> NUMBER OF ID: {id}</h1>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={updateName}
                    placeholder={user[0].name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPosition">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    value={position}
                    onChange={updatePosition}
                    placeholder={user[0].position}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="number"
                    value={salary}
                    onChange={updateSalary}
                    placeholder={user[0].salary}
                  />
                </Form.Group>

                <Link to="/">
                  <Button onSubmit={updateUser} variant="primary" type="submit">
                    Update
                  </Button>
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

export default Edit;
