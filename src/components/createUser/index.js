import React, { useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleCreateUser, seterrorMessage } from "../../store/user/slice";

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

  const errorMessage = useSelector((state) => state.user.errorMessage);
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
    if (errorMessage) {
      dispatch(seterrorMessage(""));
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

  return (
    <Row className="mb-3">
      <Col>
        <h2>Create User</h2>
        <hr />
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form>
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
                  <Form.Text className="text-danger">{errors.email}</Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="primary"
            onClick={createUser}
            style={{ marginTop: "10px" }}
          >
            Create User
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
