import React from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useParams, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function Delete() {
  const [users, setUsers] = useContext(UserContext);

  const { id } = useParams();
  console.log(users[id]);
  const delteUser = (id) => {
    const user = users.filter((user) => user.id != id);
    setUsers(user);
  };
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Link to="/">
            <Button className="mx-2" variant="dark">
              Close
            </Button>
            <Button variant="danger" onClick={() => delteUser(id)}>
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}
