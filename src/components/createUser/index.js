import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleCreateUser, setMessage } from "../../store/user/slice";
import { getMessage } from "../../selectors/getMessage";

export const CreateUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const message = useSelector(getMessage);
  const dispatch = useDispatch();

  const createUser = () => {
    const { firstName, lastName, email } = user;

    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !email) {
      setErrors({
        firstName: firstName ? "" : "First name is required",
        lastName: lastName ? "" : "Last name is required",
        email: email ? "" : "Email is required",
      });
      return;
    }
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
      return;
    }

    dispatch(handleCreateUser(user));
    setUser({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    if (message) {
      dispatch(setMessage(""));
    }

    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleClear = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
    });
    dispatch(setMessage(""));
  };

  return (
    <Row className="mb-3">
      <Col>
        <h2>Create User</h2>
        <hr />
        <Form>
          <>
            {message && (
              <Form.Text className="text-danger">{message}</Form.Text>
            )}
            <Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <Form.Text className="text-danger">
                      {errors.firstName}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <Form.Text className="text-danger">
                      {errors.lastName}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  onClick={createUser}
                  style={{ marginTop: "10px", marginRight: "5px" }}
                >
                  Create User
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleClear}
                  style={{ marginTop: "10px" }}
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </>
        </Form>
      </Col>
    </Row>
  );
};
