import React from "react";
import { Navbar, Container, Image, NavDropdown, Nav }
from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { getUser } from "../hooks/user.actions";
import studentImage from '../images/student.png'
import instructorImage from '../images/instructor.png'
import coordinatorImage from '../images/coordinator.jpg'


function Navigationbar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate('/login/')
    }
    const user = getUser()

    const getStatusImage = (status) => {
        if (user.status === "0") {
            return coordinatorImage
        } else if (user.status === "1") {
            return instructorImage
        } else if (user.status === "2") {
            return studentImage
        }
    }
    return(
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand className="fw-bold" href="#home">
                DiploMate
            </Navbar.Brand>
            <Navbar.Collapse
                className="justify-content-end">
                <Nav>
                        <NavDropdown
                            // title={
                            //     user.first_name + " " + user.last_name
                            // }
                            // style={{color: "white"}}
                title={
                <Image
                src={getStatusImage(user.status)}
                roundedCircle
                width={36}
                height={36}
                />
                }
                >
                            <NavDropdown.Item as={ Link} to={`/profile/${user.id}/`}>Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navigationbar;