import { Container } from "react-bootstrap";
import { CreateUser } from "../../components/createUser";
import { UserList } from "../../components/userList";
import { EditedUser } from "../../components/UserPopup/EditedUser";
import { DeleteUser } from "../../components/UserPopup/DeleteUser";
export const UserData = () => {
  return (
    <>
      <Container>
        <h2>User's Data:</h2>
        <hr className="my-4" />
        <CreateUser />
        <hr className="my-4" />
        <UserList />
        <EditedUser />
        <DeleteUser />
      </Container>
    </>
  );
};
