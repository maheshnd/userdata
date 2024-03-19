import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { shouldOpenDeletePopup } from "../../selectors/shouldOpenDeletePopup";
import {
  handleDelete,
  setCurrentAction,
  setCurrentSelectedUser,
} from "../../store/user/slice";
import { getCurrentSelectedUser } from "../../selectors/getCurrentSelectedUser";
export const DeleteUser = () => {
  const dispatch = useDispatch();
  const shouldOpen = useSelector(shouldOpenDeletePopup);
  const currentUser = useSelector(getCurrentSelectedUser);
  const handleClose = () => {
    dispatch(setCurrentSelectedUser(""));
    dispatch(setCurrentAction(""));
  };
  const confirmDelete = () => {
    dispatch(handleDelete());
  };
  return (
    <Modal show={shouldOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Are you sure you want to delete ${currentUser} user?`}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={confirmDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
