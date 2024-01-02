import React from "react";
import { Form, Col } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="d-flex shadow-lg rounded gap-3 p-3 col-8">
      <Form.Group className="mb-3 ">
        <Form.Label>
          {" "}
          <i className="fa-solid fa-location-dot"></i> Location
        </Form.Label>
        <Form.Control type="email" placeholder="where are you going" />
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>
          {" "}
          <i className="fa-solid fa-location-dot"></i> Distance
        </Form.Label>
        <Form.Control type="email" placeholder="Distance Km" />
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>
          {" "}
          <i className="fa-solid fa-user-group"></i> Max People
        </Form.Label>
        <Form.Control type="email" placeholder="00" />
      </Form.Group>
    </div>
  );
};

export default SearchBar;
