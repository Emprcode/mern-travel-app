import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TourCard.css";

export const TourCard = ({ item }) => {
  const {
    id,
    title,
    city,
    distance,
    price,
    maxGroupSize,
    desc,
    reviews,
    avgRating,
    photo,
    featured,
  } = item;
  return (
    <Card
      style={{ width: "15rem", height: "21rem" }}
      className="shadow-lg border-0"
    >
      <Card.Img variant="top" src={photo} />
      <span>{featured}</span>
      <div className=" d-flex justify-content-between align-items-center mt-2 ">
        <span className="d-flex justify-content-center align-items-center gap-2">
          <FaLocationDot color="teal" /> <span className="p"> {city}</span>
        </span>

        <span className="d-flex justify-content-center align-items-center gap-2">
          <FaStar color="orange" />
          {avgRating} <span> ({reviews.length})</span>
        </span>
      </div>
      <Card.Body>
        <Card.Title className="">
          {" "}
          <Link to={`/tours/${id}`} className="nav-link">
            <h6 className="fw-bold title"> {title} </h6>
          </Link>
        </Card.Title>
        <Card.Text className="d-flex justify-content-start align-items-center mt-2">
          <h6>${price}.00 per person</h6>
        </Card.Text>
        <div className="text-end">
          <Link to={`/tours/${id}`}>
            <Button
              variant="warning"
              className="rounded-pill fw-bold text-light"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
