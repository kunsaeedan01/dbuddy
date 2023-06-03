import React, { useState, useContext } from "react";
import { format } from "timeago.js";
import { Image, Card, Dropdown, Button } from "react-bootstrap";
import { randomAvatar } from "../../utils";
import axiosService from "../../helpers/axios";
import { getUser } from "../../hooks/user.actions";
import UpdateJoin from "./UpdateJoin";
import { Context } from "../Layout";
import MoreToggleIcon from "../MoreToggleIcon";

function Join(props) {
  const { projectId, join, refresh } = props;
  const [toaster, setToaster] = useContext(Context);
  const user = getUser();

  const handleDelete = () => {
    axiosService
      .delete(`/project/${projectId}/join/${join.id}`)
      .then(() => {
        setToaster({
          type: "danger",
          message: "Join request deleted",
          show: true,
          title: "Join canceled",
        });
      })
      .catch((err) => {
        setToaster({
          type: "warning",
          message: "Join deleted",
          show: true,
          title: "Join deleted",
        });
      });
  };

  const handleAccept = () => {
    // Implement the logic to handle accepting the join request here
    // You can make an API request or perform any necessary actions
  };

  return (
    <Card className="rounded-3 my-2">
      <Card.Body>
        <Card.Title className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row">
            <Image
              src={user.avatar}
              roundedCircle
              width={48}
              height={48}
              className="me-2 border border-primary border-2"
            />
            <div className="d-flex flex-column justify-content-start align-self-center mt-2">
              <p className="fs-6 m-0">{join.applicant.name}</p>
              <p className="fs-6 fw-lighter">
                <small>{format(join.created)}</small>
              </p>
            </div>
          </div>
          {user.username === join.applicant.username && (
            <div>
              <Dropdown>
                <Dropdown.Toggle as={MoreToggleIcon}></Dropdown.Toggle>
                <Dropdown.Menu>
                  <UpdateJoin join={join} refresh={refresh} projectId={projectId} />
                  <Dropdown.Item onClick={handleDelete} className="text-danger">
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
          {user.username === join.project.author.username && (
            <div>
              <Button onClick={handleAccept} variant="primary">
                Accept
              </Button>
            </div>
          )}
        </Card.Title>
        <Card.Text>{join.message}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Join;