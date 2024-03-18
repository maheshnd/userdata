import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete, setCurrentSelectedUser } from "../../store/user/slice";
export const TableData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user?.Users);
  const handleEdit = (user) => {
    dispatch(setCurrentSelectedUser(user));
  };
  const handleDeleteUser = (user) => {
    dispatch(handleDelete(user));
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
