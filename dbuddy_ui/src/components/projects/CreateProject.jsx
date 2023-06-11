import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axiosService from "../../helpers/axios";
import { getUser } from "../../hooks/user.actions";
import Toaster from "../Toaster";


function CreateProject(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>  setShow(true);
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const user = getUser();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("");
    const { refresh } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const createProjectForm = event.currentTarget;
        if (createProjectForm.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        const data = {
            author: user.id, 
            title: form.title,
            description: form.description,
            type: form.type,
            technologies: form.technologies
        }
        axiosService
            .post("/project/", data)
            .then(() => {
                handleClose();
                setToastMessage("Project created 🚀");
                setToastType("success");
                setForm({});
                setShowToast(true);
                refresh();
            })
            .catch((error) => {
                setToastMessage("An error occurred.");
                setToastType("danger");
            })
    }

    return (
        <>
        <Form.Group className="my-3 w-75">
            <Form.Control
                    className="py-2 rounded-pill border-primary text-primary"
                    data-testid="show-modal-form"
                type="text"
                placeholder="Add a project"
                onClick={handleShow} />
            
        </Form.Group>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                <Modal.Title>Create Project</Modal.Title>
                </Modal.Header>
                <Modal.Body className="border-0">
                    <Form noValidate validated={validated} onSubmit={handleSubmit} data-testid="create-project-form"> 
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                name="title"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                required
                                type="text"
                                data-testid="project-title-field"
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name="description"
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                as="textarea"
                                rows={3}
                                data-testid="project-description-field"
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                            as="select"
                            name="type"
                                value={form.type}
                                required
                            onChange={(e) => setForm({ ...form, type: e.target.value })}>
                            <option value='WA'>Web-application</option>
                            <option value="MA">Mobile application</option>
                            <option value="GM">Game</option>
                            <option value='HW'>Hardware</option>
                            <option value='MD'>Media</option>
                            <option value="NN">Neural Network</option>
                            <option value="RT">Research</option>
                        </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select a type of project.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Technologies</Form.Label>
                            <Form.Control
                                name="title"
                                value={form.technologies}
                                onChange={(e) => setForm({ ...form, technologies: e.target.value })}
                                required
                                type="text"
                                data-testid="technologies-field"
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary"
                        onClick={handleSubmit}
                        disabled={form.description === undefined}
                        data-testid="create-project-submit">
                        
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <Toaster
                title="Project!"
                message={toastMessage}
                showToast={showToast}
                type={toastType}
                onClose={() => {setShowToast(false)}}
            ></Toaster>

         </>
    );
};
export default CreateProject;