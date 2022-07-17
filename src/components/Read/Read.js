import React, { useContext } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

function Read() {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => {
    return user.id == id;
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <h1 className="text-center"> Read The students docs</h1>
              <img
                className="rounded-circle w-25 text-center"
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
              />
            </div>
            <Table striped>
              <thead>
                <tr>
                  <th>id</th>
                  <th> Name</th>
                  <th>Position</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user[0].id}</td>
                  <td>{user[0].name}</td>
                  <td> {user[0].position}</td>
                  <td>{user[0].salary}</td>
                </tr>
              </tbody>
            </Table>
            <Link to="/">
              <Button varient="danger">Go to home</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Read;
