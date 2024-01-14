import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Subtitle from "../../shared/Subtitle";
import world from "../../assets/images/world.png";
import heroImg1 from "../../assets/images/hero-img01.jpg";
import heroImg2 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import experienceImg from "../../assets/images/experience.png";
import "./Home.css";
import SearchBar from "../../shared/SearchBar";
import { ServiceCard } from "../../services/ServiceCard";
import { FeaturedTourList } from "../../components/featuredTour/FeaturedTourList";
import { ImageGallery } from "../../image-gallery/ImageGallery";
import { Testimonials } from "../../components/testimonial/Testimonials";

const Home = () => {
  return (
    <>
      <div>
        <Container className="p-3 mt-5">
          <Row>
            <Col lg="6">
              <div>
                <div className="d-flex align-items-center">
                  <Subtitle subtitle={"Know Before you Go"} />
                  <img src={world} alt="world" width={50} />
                </div>
                <h1 className="mt-4">
                  Travelling opens the door to creating{" "}
                  <span className="highlight text-warning">“memories”</span>
                </h1>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, assumenda odio? Minus laudantium adipisci autem
                  debitis recusandae vero suscipit! Nesciunt veritatis id
                  similique sapiente quam sunt nam repellendus velit totam.
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
      {/* offer section */}
      <div className="mt-4">
        <Container>
          <Row>
            <h5 className="services__subtitle">what service we offer</h5>

            <h3 className="services__title">We offer our best services</h3>

            <Col className="mt-3">
              <ServiceCard />
            </Col>
          </Row>
        </Container>
      </div>

      {/* feature tour section */}
      <div className="mt-4 mb-4">
        <Container className="">
          <Row>
            <Col className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2>Our Featured Tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </div>

      {/* experience section */}
      <div className="mt-5 mb-5">
        <Container>
          <Row className="p-4">
            <Col className="">
              <Subtitle subtitle={"Experience"} />
              <h2>
                With our all experience <br />
                we will serve you
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                fugit
                <br />
                facere assumenda dicta? Sit hic suscipit qui commodi, sunt
                tempore
              </p>

              <div className="d-flex justify-content-around align-items-center gap-4 ">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful trips</h6>
                </div>
                <div className="counter_box">
                  <span className="">3k+</span>
                  <h6 className="mt-2">Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>10</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col className="mt-4">
              <div>
                <img src={experienceImg} alt="" width="80%" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* gallery section */}

      <div className="mt-5 mb-5">
        <Container>
          <Row className="p-4">
            <Col lg={12}>
              <Subtitle subtitle={"Gallery"} />
              <h2 className="mt-2">Visit our customers tour gallery</h2>
            </Col>
            <Col lg={12}>
              <ImageGallery />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials */}
      <div className="mt-5 mb-5">
        <Container>
          <Row className="p-4">
            <Col lg={12}>
              <Subtitle subtitle={"Fans Feedback"} />
              <h2 className="mt-2">What our customer says about us</h2>
            </Col>
            <Col lg={12}>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
