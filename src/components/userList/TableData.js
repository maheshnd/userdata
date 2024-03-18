import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete, setCurrentSelectedUser } from "../../store/user/slice";

export const TableData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user?.Users);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleEdit = (user) => {
    dispatch(setCurrentSelectedUser(user));
  };

  const handleDeleteUser = (user) => {
    setUserToDelete(user);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    dispatch(handleDelete(userToDelete));
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>
            <Button onClick={() => handleEdit(user.email)} variant="primary">
              Edit
            </Button>{" "}
            <Button
              onClick={() => handleDeleteUser(user.email)}
              variant="danger"
            >
              Delete
            </Button>
          </td>
        </tr>
      ))}

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </tbody>
  );
};
