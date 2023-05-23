import React from "react";
import { Navbar, Container, Image, NavDropdown, Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { getUser } from "../hooks/user.actions";
import studentImage from '../images/student.png';
import instructorImage from '../images/instructor.png';
import coordinatorImage from '../images/coordinator.jpg';

function Navigationbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate('/login/');
  };
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

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="fw-bold" href="/" style={{"margin-right": "200px", "font-size": "24px"}}>
          DiploMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="me-auto" >
                      <Nav.Link as={Link} to="/projects" className="text-white" style={{ "margin-right": "200px", "font-size": "18px"}}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/profiles" className="text-white" style={{"margin-right": "200px", "font-size": "18px"}}>
              Profiles
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white" style={{"margin-right": "200px", "font-size": "18px"}}>
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <Image
                  src={getStatusImage(user.status)}
                  roundedCircle
                  width={36}
                  height={36}
                />
              }
            >
              <NavDropdown.Item as={Link} to={`/profile/${user.id}`} className="text-dark">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout} className="text-dark">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;