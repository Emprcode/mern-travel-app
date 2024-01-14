import Card from "react-bootstrap/Card";
import "./Servicecard.css";
import { CiCloudSun } from "react-icons/ci";
import { BsNewspaper } from "react-icons/bs";
import { FaExpeditedssl } from "react-icons/fa";

export const ServiceCard = () => {
  return (
    <div className="d-flex justify-content-around flex-wrap p-3 card_item">
      <Card style={{ width: "18rem" }} className="p-2 border-0 ">
        <div className="item_style">
          <span className="p-2 icon-style">
            <CiCloudSun size={45} />
          </span>
          <Card.Body>
            <Card.Title>Claculate Weather</Card.Title>
            <Card.Text>
              Plan seamlessly with real-time weather updates for a comfortable
              journey.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>

      <Card style={{ width: "18rem" }} className=" p-2 border-0">
        <div className="item_style">
          <span className="p-2 icon-style">
            <BsNewspaper size={35} />
          </span>
          <Card.Body>
            <Card.Title>Best Tour Guide</Card.Title>
            <Card.Text>
              Exceptional guide, unlocking the best experiences for
              unforgettable journeys.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: "18rem" }} className=" p-2 border-0">
        <div className="item_style">
          <span className="p-2 icon-style">
            <FaExpeditedssl size={35} />
          </span>
          <Card.Body>
            <Card.Title>Customization</Card.Title>
            <Card.Text>
              Customized to your preferences for a unique, personalized
              experience.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};
