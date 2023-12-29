import React from "react";
import { Button, Container, NavLink, Row } from "react-bootstrap";
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
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* logo */}
            <div className="logo">
              <img src={logo} alt="logo" width="350px" />
            </div>
            {/* menu */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {navbarLinks.map((item, i) => (
                  <li className="nav__item" key={i}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* menu-end */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button variant="none" className="">
                  <Link to="/login" className="nav-link">
                    {" "}
                    Login
                  </Link>
                </Button>
                <Button variant="warning" className="rounded-pill">
                  <Link to="/login" className="nav-link">
                    {" "}
                    Register
                  </Link>
                </Button>{" "}
              </div>
              <span className="mobile_menu">
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
