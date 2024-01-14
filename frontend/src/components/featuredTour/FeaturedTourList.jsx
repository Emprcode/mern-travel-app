import React from "react";
import toursData from "../../assets/data/tours";
import { TourCard } from "../../shared/TourCard";
import { Row } from "react-bootstrap";
export const FeaturedTourList = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
      {toursData?.map((item, i) => (
        <TourCard key={i} item={item} />
      ))}
    </Row>
  );
};
