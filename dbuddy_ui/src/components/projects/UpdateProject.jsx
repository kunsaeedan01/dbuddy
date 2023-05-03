import React, { useState } from "react";
import { Button, Modal, Form, Dropdown } from "react-bootstrap";
import axiosService from "../../helpers/axios";
import Toaster from "../Toaster";

function UpdateProject(props) {
    const { project, refresh } = props
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [form, setForm] = useState({
        author: project.author.id,
        title: project.title,
        description: project.description,
        type: project.type
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const updateProjectForm = event.currentTarget;

        if (updateProjectForm.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        const data = {
            author: form.author, 
            title: form.title, 
            description: form.description,
            type: form.type
        }
        axiosService.put(`/project/${project.id}/`, data)
            .then(() => {
                handleClose();
                setShowToast(true);
                refresh();
            }).catch((err) => {
                        console.log(err)
                    })
    }

    return (
        <>
            <Dropdown.Item onClick={handleShow}>Modify</Dropdown.Item>
                  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Update Project</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                name="title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                as="textarea"
                rows={3}
              />
                        </Form.Group>
            <Form.Group className="mb-3">
                        <Form.Select
                            name="type"
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}>
                            <option value='WA'>Web-application</option>
                            <option value="MA">Mobile application</option>
                            <option value="GM">Game</option>
                            <option value='HW'>Hardware</option>
                            <option value='MD'>Media</option>
                            <option value="NN">Neural Network</option>
                            <option value="RT">Research</option>
                        </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Modify
          </Button>
        </Modal.Footer>
      </Modal>
      <Toaster
        title="Success!"
        message="Project updated 🚀"
        type="success"
        showToast={showToast}
        onClose={() => setShowToast(false)}
      />
        </>
    );

}


export default UpdateProject;