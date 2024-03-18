import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdate, setCurrentSelectedUser } from "../../store/user/slice";

export const EditedUser = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const currentSelectedUser = userState.currentSelectedUser;
  const [editedUser, setEditedUser] = useState({});
  useEffect(() => {
    const editedUser = userState?.Users?.find(
      (user) => user.email === currentSelectedUser
    );
    if (editedUser) {
      setEditedUser({ ...editedUser });
    }
  }, [currentSelectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleUpdateData = () => {
    dispatch(handleUpdate(editedUser));
    handleClose();
  };

  const handleClose = () => {
    dispatch(setCurrentSelectedUser(""));
  };

  return (
    <Modal show={!!currentSelectedUser} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={editedUser.firstName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={editedUser.lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              disabled={true}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleUpdateData}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
