import React, { useState } from "react";
import { format } from "timeago.js";
import { LikeFilled, CommentOutlined, LikeOutlined, MoreOutlined } from "@ant-design/icons";
import { Image, Card, Dropdown, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { randomAvatar } from "../../utils";
import axiosService from "../../helpers/axios";
import Toaster from "../Toaster";
import { getUser } from "../../hooks/user.actions";
import UpdateProject from "./UpdateProject";



const MoreToggleIcon = React.forwardRef(({ onClick }, ref) => (
 <Link
    to="#"
    ref={ref}
    onClick={(e) => {e.preventDefault(); onClick(e);}}>
        <MoreOutlined />
    </Link >
));

        


function Project(props) {
    const { project, refresh, isSingleProject } = props;
    const user = getUser();
    const [showToast, setShowToast] = useState(false);


    const handleLikeClick = (action) => {
        axiosService
            .post(`/project/${project.id}/${action}/`)
            .then(() => {
                refresh();
            }).catch((error) => console.log(error));
    }

    const handleDelete = () => {
        axiosService
            .delete(`/project/${project.id}/`)
            .then(() => {
                setShowToast(true);
                refresh();
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
         <Card className="rounded-3 my-4">
            <Card.Body>
                <Card.Title className="d-flex flex-row
                justify-content-between">
                {user.name === project.author.name && (
                 <div>
                                <Dropdown>
                                    <Dropdown.Toggle as={MoreToggleIcon}></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <UpdateProject project={project}refresh={refresh} />
                                        <Dropdown.Item
                                            onClick={handleDelete}
                                            className='text-danger'
                                        >
                                        Delete
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                
                </div>            
                        )}
                        </Card.Title>
                <div className="d-flex flex-row">
                <Image
                src={randomAvatar()}
                roundedCircle
                width={48}
                height={48}
                className="me-2 border border-primary
                border-2"
                />
                <div className="d-flex flex-column
                justify-content-start
                align-self-center mt-2">
                <p className="fs-6 m-0">
                                    {project.title} by {project.author.username}</p>
                {/* <p className="fs-6 m-0">
                {project.author.name}</p> */}
                <p className="fs-6 fw-lighter">
                <small>{format(project.created)}</small>
                </p>
                </div>
                </div>
                    <Card.Subtitle>Type: { project.type }</Card.Subtitle>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="d-flex flex-row">
                <LikeFilled
                style={{
                color: "#fff",
                backgroundColor: "#0D6EFD",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                fontSize: "75%",
                padding: "2px",
                margin: "3px",
                }}
                />
                <p className="ms-1 fs-6">
                <small>{project.likes_count} like</small>
                </p>
                    </div>
            {!isSingleProject && (
              <p className="ms-1 fs-6">
                <small>
                  <Link to={`/project/${project.id}/`}>
                    {project.joins_count} join requests
                  </Link>
                </small>
              </p>
            )}
                </Card.Body>
                <Card.Footer className="d-flex bg-white w-50
                    justify-content-between border-0">
                    <div className="d-flex flex-row">
                <LikeOutlined
                    style={{
                    width: "24px",
                    height: "24px",
                    padding: "2px",
                    fontSize: "20px",
                    color: project.liked ? "#0D6EFD" :
                    "#C4C4C4",
                    }}
                    onClick={() => {
                    if (project.liked) {
                    handleLikeClick("remove_like");
                    } else {
                    handleLikeClick("like");
                    }
                    }}
                    />
                    <p className="ms-1">
                    <small>Like</small>
                    </p>
                    </div>
            {!isSingleProject && (
            <div className="d-flex flex-row">
              <CommentOutlined
                style={{
                  width: "24px",
                  height: "24px",
                  padding: "2px",
                  fontSize: "20px",
                  color: "#C4C4C4",
                }}
              />
              <p className="ms-1 mb-0">
                <small>Join</small>
              </p>
            </div>
          )}
                    {/* Add comment icon here*/}
                    </Card.Footer>
         </Card>
        </>
    );
}

export default Project;