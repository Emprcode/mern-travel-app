import React from "react";
import { Form, Col } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="d-flex shadow-lg form__style gap-3 col-8">
      <Form.Group className="mb-3 d-flex justify-content-center align-items-center gap-3 ">
        <span className="icon_color">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <div className="form__group form__group-fast">
          <Form.Label> Location</Form.Label>
          <Form.Control type="text" placeholder="where are you going" />
        </div>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-center align-items-center gap-3 ">
        <span className="icon_color">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <div className=" form__group form__group-fast">
          <Form.Label> Distance</Form.Label>
          <Form.Control type="number" placeholder="Distance Km" />
        </div>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-center align-items-center gap-3">
        <span className="icon_color">
          <i className="fa-solid fa-user-group"></i>
        </span>
        <div className="form__group">
          <Form.Label> Max People</Form.Label>
          <Form.Control type="number" placeholder="00" />
        </div>
      </Form.Group>
    </div>
  );
};

export default SearchBar;
