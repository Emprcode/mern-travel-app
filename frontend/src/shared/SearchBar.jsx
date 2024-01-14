import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <Form>
      <div className=" d-flex justify-content-center align-items-center shadow-lg form__style gap-3 col-md-8">
        <Form.Group className="mb-3 mx-md-3 d-flex justify-content-center align-items-center gap-3 ">
          <span className="icon_color">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <div className="form__group form__group-fast">
            <Form.Label> Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="where are you going"
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center gap-3 ">
          <span className="icon_color">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <div className=" form__group form__group-fast">
            <Form.Label> Distance</Form.Label>
            <Form.Control type="number" placeholder="Distance Km" required />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center gap-3">
          <span className="icon_color">
            <i className="fa-solid fa-user-group"></i>
          </span>
          <div className="form__group">
            <Form.Label> Max People</Form.Label>
            <Form.Control type="number" placeholder="00" required />
          </div>
        </Form.Group>
        <div className="p-3 d-flex justify-content-center align-items-center rounded h4">
          <Button
            variant="warning"
            className="rounded text-light p-2"
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default SearchBar;
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";

// const SearchBar = () => {
//   return (
//     <Form>
//       <Row className="d-flex flex-wrap">
//         <Col className="col-3">
//           <Form.Control placeholder="First name" />
//         </Col>
//         <Col>
//           <Form.Control placeholder="Last name" />
//         </Col>
//       </Row>
//     </Form>
//   );
// };
// export default SearchBar;
