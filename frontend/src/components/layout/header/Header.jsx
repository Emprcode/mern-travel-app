import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary fixed">
      <Container>
        <Navbar.Brand href="#home">
          <div>
            <img src={logo} alt="logo" width="180px" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-around gap-5">
            <Link className="nav-link fw-bold h5" to="home">
              Home
            </Link>
            <Link className="nav-link fw-bold h5" to="about">
              About
            </Link>
            <Link className="nav-link fw-bold h5" to="tours">
              Tours
            </Link>
          </Nav>
          <Nav className="ms-auto gap-4 ">
            <Button variant="none" className="fw-bold h5">
              {" "}
              Login
            </Button>
            <Button variant="warning" className="fw-bold h5">
              {" "}
              Register
            </Button>
            <span className="mx-2">
              {" "}
              <i className="fa-solid fa-bars"></i>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
