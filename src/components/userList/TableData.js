import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentAction,
  setCurrentSelectedUser,
  setMessage,
} from "../../store/user/slice";
import { getUserList } from "../../selectors/getUserList";

export const TableData = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUserList);

  const handleEdit = (user) => {
    dispatch(setCurrentSelectedUser(user));
    dispatch(setCurrentAction("Edit"));
    dispatch(setMessage(""));
  };

  const handleDeleteUser = (user) => {
    dispatch(setCurrentSelectedUser(user));
    dispatch(setCurrentAction("Delete"));
    dispatch(setMessage(""));
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
    </tbody>
  );
};
