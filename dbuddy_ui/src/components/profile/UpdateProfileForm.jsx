import React, { useState, useContext } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../../hooks/user.actions";
import { Context } from "../Layout";


export default function UpdateProfileForm(props) {
    const { profile } = props;
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false)
    const [form, setForm] = useState(profile)
    const [error, setError] = useState(null);
    const userActions = useUserActions();
    const [avatar, setAvatar] = useState();
    const { toaster, setToaster } = useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updateProfileForm = event.currentTarget;
    
        if (updateProfileForm.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        const data = {
            first_name: form.first_name,
            last_name: form.last_name, 
            bio: form.bio,
            faculty: form.faculty, 
            group: form.group, 
            status: form.status, 
            gender: form.gender,
        }

        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            if (data[key]) {
                formData.append(key, data[key])
            }
        });
        if (avatar) {
            formData.append("avatar", avatar)
        }
        userActions
            .edit(formData, profile.id)
            .then(() => {
                setToaster({
                    type: "success",
                    message: "Profile updated successfully �",
                    show: true,
                    title: "Profile updated"
                });
                navigate(-1);
            }).catch((err) => {
                if (err.message) {
                    setError(err.request.response);
                }
            })
    }

    return (
        <Form id="registration-form"
              className="border p-4 rounded"
              noValidate
              validated={validated}
            onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3 d-flex flex-column">
                <Form.Label className="text-center">Avatar</Form.Label>
                <Image
                    src={form.avatar}
                    roundedCircle
                    width={120}
                    height={120}
                    className="m-2 border border-primary border-2  align-self-center"
                />
                <Form.Control
                    onChange={(e) => setAvatar(e.target.files[0])}
                    className="w-50 align-self-center"
                    type="file"
                    size="sm"
                />
                <Form.Control.Feedback type="invalid">
                    This file is required.
                </Form.Control.Feedback>
            </Form.Group>

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
                    This field is required
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    value={form.last_name}
                    onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                    required
                    type="text"
                    placeholder="Enter last name"
                />
                <Form.Control.Feedback type="invalid">
                    This field is required
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

            <Form.Group className="mb-3">
                <Form.Label>Group</Form.Label>
                <Form.Control
                    value={form.group}
                    onChange={(e) => setForm({ ...form, group: e.target.value })}
                    required
                    type="text"
                    placeholder="Enter group name"
                />
                <Form.Control.Feedback type="invalid">
                    This field is required
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

    <div className="text-content text-danger">{error && <p>{error}</p>}</div>
    <Button variant="primary" type="submit">
        Save changes
    </Button>

        </Form>
    );
}