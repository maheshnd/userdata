import { Row, Col, Table } from "react-bootstrap";
import { UserListHeader } from "./Header";
import { TableData } from "./TableData";
import { useSelector } from "react-redux";
import { getUserList } from "../../selectors/getUserList";
export const UserList = () => {
  const userData = useSelector(getUserList);
  if (!userData?.length) {
    return null;
  }
  return (
    <Row>
      <Col>
        <h2>User List</h2>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <Table striped bordered hover>
            <UserListHeader />
            <TableData />
          </Table>
        </div>
      </Col>
    </Row>
  );
};
