import React, { useState } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const StepFour = (props) => {
  return (
    <section>
      <div>
        {props.formData["name"] === "" && props.formData["age"] === "" ? (
          ""
        ) : (
          <p className="text-center">
            You are predicting stroke probability for the patient{" "}
            {props.formData["name"]} at the age {props.formData["age"]}
          </p>
        )}
      </div>

      <div className="text-center py-4">
        <button
          onClick={props.handleOnSubmit}
          type="submit"
          className="me-2 btn btn-primary btn-rounded"
        >
          Predict
        </button>
      </div>
      <div className="row justify-content-center">
        <Card className="col-xl-6">
          <Card.Header className=" d-block">
            <Card.Title>Prediction Values </Card.Title>
          </Card.Header>
          <Card.Body>
            <h6>
              Positive <small>(Stroke probability percentage)</small>
              <span className="pull-end">
                {(props.prediction.positive_rate * 100).toFixed(2)}%
              </span>
            </h6>
            <ProgressBar
              now={(props.prediction.positive_rate * 100).toFixed(2)}
              variant="danger"
            />
            <h6 className="mt-4">
              Negative
              <span className="pull-end">
                {(props.prediction.negative_rate * 100).toFixed(2)}%
              </span>
            </h6>
            <ProgressBar
              now={(props.prediction.negative_rate * 100).toFixed(2)}
              variant="success"
            />
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default StepFour;
