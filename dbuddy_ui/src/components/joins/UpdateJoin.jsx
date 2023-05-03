import React, { useState, useContext } from "react";
import { Button, Modal, Form, Dropdown } from "react-bootstrap";
import axiosService from "../../helpers/axios";
import { Context } from "../Layout";
import axios from "axios";


function UpdateJoin(props) {
    const { projectId, join, refresh } = props;
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        applicant: join.applicant.id,
        message: join.message,
        project: projectId
    });
    const { toaster, setToaster } = useContext(Context);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const updateJoinForm = event.currentTarget;

        if (updateJoinForm.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        const data = {
            applicant: form.applicant,
            message: form.message,
            project: projectId
        }
        axiosService
            .put(`/project/${projectId}/join/${join.id}`, data)
            .then(() => {
                handleClose();
                setToaster({
                    type: "success",
                    message: "Join request updated �",
                    show: true, 
                    title: "Success"
                })
                refresh();
            }).catch((err) => {
                setToaster({
                    type: "danger",
                    message: "An error occured",
                    show: true, 
                    title: "Join Error"
                })
            })
    };

 

    return (
        <>
            <Dropdown.Item onClick={handleShow}>Modify</Dropdown.Item>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Update Join request</Modal.Title>
                </Modal.Header>
                <Modal.Body className="border-0">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                name="message"
                                value={form.message}
                                onChange={(e) => {
                                    setForm({
                                        ...form, message: e.target.value
                                    })
                                }} as="textarea"
                                rows={3}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Modify
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}


export default UpdateJoin;