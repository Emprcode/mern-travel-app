import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Subtitle from "../../shared/Subtitle";
import world from "../../assets/images/world.png";
import heroImg1 from "../../assets/images/hero-img01.jpg";
import heroImg2 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import "./Home.css";
import SearchBar from "../../shared/SearchBar";

const Home = () => {
  return (
    <div>
      <Container className="p-3 mt-5">
        <Row>
          <Col lg="6">
            <div>
              <div className="d-flex align-items-center">
                <Subtitle subtitle={"Know Before you Go"} />
                <img src={world} alt="world" width={50} />
              </div>
              <h1>
                Travelling opens the door to creating{" "}
                <span className="highlight text-warning">memories</span>
              </h1>
              <p className="mt-3 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, assumenda odio? Minus laudantium adipisci autem debitis
                recusandae vero suscipit! Nesciunt veritatis id similique
                sapiente quam sunt nam repellendus velit totam.
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg1} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
        </Row>
        <Row className="">
          <SearchBar />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
