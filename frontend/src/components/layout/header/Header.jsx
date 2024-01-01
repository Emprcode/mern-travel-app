import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
const navbarLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "#",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo">
            <img src={logo} alt="logo" width="320px" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="menu d-flex justify-content-center align-items-center gap-5">
              {navbarLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="nav-link h4">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
          <Nav className="">
            <Button variant="none">Login</Button>{" "}
            <Button variant="warning" className="mx-2">
              Register
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
