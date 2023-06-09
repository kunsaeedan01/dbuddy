import React, { useState, useContext } from "react";
import { Button, Form, Image } from "react-bootstrap";
import axiosService from "../../helpers/axios";
import { getUser } from "../../hooks/user.actions";
import { Context } from "../Layout";
import studentImage from '../../images/student.png';
import instructorImage from '../../images/instructor.png';
import coordinatorImage from '../../images/coordinator.jpg'

function CreateJoin(props) {
  const imageMap = {
    "0": coordinatorImage,
    "1": instructorImage,
    "2": studentImage
  }

  const { projectId, refresh } = props;
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const { toaster, setToaster } = useContext(Context);
  const user = getUser();

  const getStatusImage = (status) => {
    if (user.status === "0") {
      return coordinatorImage;
    } else if (user.status === "1") {
      return instructorImage;
    } else if (user.status === "2") {
      return studentImage;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const createJoinForm = event.currentTarget;

    if (createJoinForm.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    const data = {
      applicant: user.id,
      message: form.message,
      project: projectId
    };
    axiosService.post(`/project/${projectId}/join/`, data)
      .then(() => {
        setForm({ ...form, message: "" });
        setToaster({
          type: "success",
          message: "Join request sent successfully🚀",
          show: true,
          title: "Join!",
        });
        refresh();
      }).catch(() => {
        setToaster({
          type: "danger",
          message: "",
          show: true,
          title: "An error occurred",
        });
      });
  };

  return (
    <Form
      className="d-flex flex-row justify-content-between align-items-center"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Image
        src={imageMap[user.status]}
        roundedCircle
        width={48}
        height={48}
        className="my-2"
      />
      <Form.Group className="m-3 w-75">
        <Form.Control
          className="py-2 rounded-pill border-primary"
          type="text"
          placeholder="Send a join request"
          value={form.message}
          name="message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={handleSubmit}
        disabled={!form.message}
      >
        Join
      </Button>
    </Form>
  );
}

export default CreateJoin;