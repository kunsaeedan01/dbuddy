import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../../hooks/user.actions";



function RegistrationForm() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const userActions = useUserActions();

    const handleSubmit = (event) => {
    event.preventDefault();
    const registrationForm = event.currentTarget;
    if (registrationForm.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      const data = {
        username: form.username,
        password: form.password,
        email: form.email,
        first_name: form.first_name,
        last_name: form.last_name,
        gender: form.gender,
        status: form.status,
        faculty: form.faculty,
        skills: form.skills,
      };
      userActions.register(data).catch((err) => {
      if (err.message) {
        setError(err.request.response);
      }
    });
    }
  };

    

 return (
    <Form
      id="registration-form"
      className="border p-4 rounded"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          value={form.first_name}
          onChange={(e) => setForm({ ...form, first_name: e.target.value })}
          required
          type="text"
          placeholder="Enter first name"
        />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          value={form.last_name}
          onChange={(e) => setForm({ ...form, last_name: e.target.value })}
          required
          type="text"
          placeholder="Enter last name"
        />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
         </Form.Group>
         
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          type="text"
          placeholder="Enter username"
        />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
         </Form.Group>
         
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          type="email"
          placeholder="Enter email"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
         </Form.Group>
         
<Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={form.password}
          minLength="8"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
         </Form.Group>
         
         <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
       <Form.Control
         as="select"
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
            >
            <option value="M">Male</option>
            <option value="F">Female</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
            Please select a gender.
            </Form.Control.Feedback>
         </Form.Group>
         
         <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
       <Form.Control
         as="select"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
            <option value='0'>Coordinator</option>
            <option value="1">Instructor</option>
            <option value="2">Student</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
            Please select a status.
        </Form.Control.Feedback>
         </Form.Group>
         
        <Form.Group className="mb-3">
            <Form.Label>Faculty</Form.Label>
       <Form.Control
         as="select"
            value={form.faculty}
            onChange={(e) => setForm({ ...form, faculty: e.target.value })}
        >
            <option value='SE'>Software Engineering</option>
            <option value="BDA">Big Data Analysis</option>
            <option value="IT">Computer Science</option>
            <option value='MT'>Media Technologies</option>
            <option value="IA">Industrial Automation</option>
            <option value="TS">Telecommunication Systems</option>
            <option value='CS'>Cybersecurity</option>
            <option value="DJ">Digital Journalism</option>
            <option value="ITM">IT Management</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
            Please select a faculty.
        </Form.Control.Feedback>
        </Form.Group>

         <Form.Group className="mb-3">
        <Form.Label>Group</Form.Label>
        <Form.Control
          value={form.group}
          onChange={(e) => setForm({ ...form, group: e.target.value })}
          required
          type="text"
          placeholder="Enter group "
        />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
         </Form.Group>

          

      <Form.Group className="mb-3">
        <Form.Label>Bio</Form.Label>
        <Form.Control
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
          as="textarea"
          rows={3}
          placeholder="A simple bio ... (Optional)"
        />
      </Form.Group>

      <div className="text-content text-danger">{error && <p>{error}</p>}</div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegistrationForm;