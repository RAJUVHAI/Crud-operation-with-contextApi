import React from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useContext(UserContext);

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <div className="mt-5">
                <div className="addUserBtn">
                  <Link to="create">
                    <Button variant="primary">Create User</Button>
                  </Link>
                </div>
                <div className="userTable mt-2">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index}>
                          <td> {user.id} </td>
                          <td> {user.name} </td>
                          <td> {user.position} </td>
                          <td> {user.salary} </td>
                          <td>
                            {" "}
                            <Link to={"/read/" + user.id}>
                              <Button variant="success">Read</Button>
                            </Link>
                            <Link to={"/edit/" + user.id}>
                              <Button className="mx-2" variant="info">
                                Edit
                              </Button>
                            </Link>
                            <Link to={"/delete/" + user.id}>
                              <Button variant="danger">Delete</Button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
