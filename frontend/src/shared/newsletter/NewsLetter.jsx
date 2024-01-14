import React from "react";
import maleTourist from "../../assets/images/male-tourist.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <Container>
        <Row>
          <Col>
            <div className="p-3 mt-5">
              <h2>Subscribe now to get useful travelling information.</h2>
              <div className="newsletter__input mt-3">
                <input type="email" placeholder="Enter your email" />
                <Button variant="warning" className="fw-bold rounded-pill">
                  Subscribe
                </Button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                sunt doloremque repellendus. Distinctio suscipit aliquid libero
                voluptatum laboriosam?
              </p>
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
