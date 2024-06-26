import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./Footer.css";

const quickLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quickLinks2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, a?
              </p>
            </div>
            <div className="social-links d-flex align-items-center gap-4">
              <span>
                <Link to="#">
                  <i className="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-facebook-circle-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-linkedin-box-line"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg={3}>
            <h5 className="footer-link-title">Discover</h5>
            <ListGroup className="footer-quick-links">
              {quickLinks.map((item, i) => (
                <ListGroup.Item key={i} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg={3}>
            <h5 className="footer-link-title">Quick Links</h5>
            <ListGroup className="footer-quick-links">
              {quickLinks2.map((item, i) => (
                <ListGroup.Item key={i} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg={3}>
            <h5 className="footer-link-title">Contact</h5>
            <ListGroup className="footer-quick-links">
              <ListGroup.Item className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>{" "}
                  Address:
                </h6>

                <p className="mb-0">Lorem, ipsum dolor</p>
              </ListGroup.Item>
              <ListGroup.Item className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>{" "}
                  Email:
                </h6>

                <p className="mb-0">tours@gmail.com</p>
              </ListGroup.Item>
              <ListGroup.Item className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">+61 000 000 000</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col lg={12} className="text-center pt-5">
            <p className="copyright">
              &copy; {year} | Developed by @Emprcode|| All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
