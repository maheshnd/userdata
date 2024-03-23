import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  handleUpdate,
  setCurrentAction,
  setCurrentSelectedUser,
} from "../../store/user/slice";
import { getCurrentSelectedUser } from "../../selectors/getCurrentSelectedUser";
import { getUserList } from "../../selectors/getUserList";
import { shouldOpenEditPopup } from "../../selectors/shouldOpenEditPopup";

export const EditedUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector(getUserList);
  const shouldOpen = useSelector(shouldOpenEditPopup);
  const currentSelectedUser = useSelector(getCurrentSelectedUser);
  const [editedUser, setEditedUser] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const editedUser = userList?.find(
      (user) => user.email === currentSelectedUser
    );
    if (editedUser) {
      setEditedUser({ ...editedUser });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSelectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!editedUser.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!editedUser.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleUpdateData = () => {
    if (validateForm()) {
      dispatch(handleUpdate(editedUser));
      handleClose();
    }
  };

  const handleClose = () => {
    dispatch(setCurrentSelectedUser(""));
    dispatch(setCurrentAction(""));
  };

  return (
    <Modal show={shouldOpen} onHide={handleClose}>
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
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={editedUser.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
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
