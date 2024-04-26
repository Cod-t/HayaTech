import React, { Fragment } from "react";
import { Link } from "react-router-dom";
/// Compoents
import PageTitle from "../../layouts/PageTitle";

/// Image
import img1 from "../../../images/card/1.png";
import img2 from "../../../images/card/2.png";
import img3 from "../../../images/card/3.png";
import strokePredictionImg from "../../../images/strokePrediction.jpg";
/// Bootstrap
import { Row, Card, Col, Button, Nav } from "react-bootstrap";

const UiCards = () => {
  return (
    <Fragment>
      <PageTitle
        activeMenu="Services"
        pageContent="Services"
        motherMenu="Home"
      />
      <Row>
        <Col xl="6">
          <Card className="">
            <img
              className="card-img-top img-fluid"
              src={strokePredictionImg}
              alt="Card cap"
            />
            <Card.Header>
              <Card.Title>
                Predict The Stroke Mortality Of A Cancer Patient
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                As a healthcare provider, you can forecast the risk of
                stroke-related mortality in cancer patients to inform and
                customize their treatment strategies effectively.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={"../predict"} className="btn btn-primary">
                Predict
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UiCards;
