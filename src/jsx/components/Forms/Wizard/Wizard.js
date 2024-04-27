import React, { Fragment, useState } from "react";
//import Multistep from "react-multistep";
import { Stepper, Step } from "react-form-stepper";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import PageTitle from "../../../layouts/PageTitle";
import axios from "axios";

const Wizard = () => {
  const [goSteps, setGoSteps] = useState(0);
  const [prediction, setPrediction] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    treatment: "",
    year_of_diagnosis: null,
    race_recode_W_B_AI_API: "",
    year_of_follow_up_recode: null,
    breast: false,
    endocrine: false,
    eye_and_adnexa: false,
    gastrointestinal: false,
    gynecological: false,
    head_and_neck: false,
    hematopoietic: false,
    male_genital: false,
    musculoskeletal: false,
    nervous_system: false,
    respiratory: false,
    skin: false,
    unspecified: false,
    urinary: false,
    age: null,
  });
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (
      name === "age" ||
      name === "year_of_follow_up_recode" ||
      name === "year_of_diagnosis"
    ) {
      value = parseInt(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData({ ...formData, [name]: selectedOption.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    // let updatedCancers = [...formData.cancers];
    if (checked) {
      // updatedCancers.push(name);
      setFormData({ ...formData, [name]: true });
    } else {
      // updatedCancers = updatedCancers.filter((cancer) => cancer !== name);
      setFormData({ ...formData, [name]: false });
    }
    // setFormData({ ...formData, cancers: updatedCancers });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`http://127.0.0.1:5000/patients`, formData)
        .then((res) => {return axios.post(`http://127.0.0.1:5000/patientHistorys/${res.data.id}`,{})})
        .then((res) => {
          setPrediction(res.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Fragment>
      <PageTitle activeMenu="Prediction" motherMenu="Home" />
      <div className="row">
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">
                Predict the stroke mortality of a cancer patient
              </h4>
            </div>
            <div className="card-body">
              <div className="form-wizard ">
                <Stepper className="nav-wizard" activeStep={goSteps}>
                  <Step className="nav-link" onClick={() => setGoSteps(0)} />
                  <Step className="nav-link" onClick={() => setGoSteps(1)} />
                  <Step className="nav-link" onClick={() => setGoSteps(2)} />
                  <Step className="nav-link" onClick={() => setGoSteps(3)} />
                </Stepper>
                {goSteps === 0 && (
                  <>
                    <StepOne
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleSelectChange={handleSelectChange}
                    />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-primary sw-btn-next"
                        onClick={() => setGoSteps(1)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 1 && (
                  <>
                    <StepTwo
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleSelectChange={handleSelectChange}
                    />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev me-1"
                        onClick={() => setGoSteps(0)}
                      >
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ms-1"
                        onClick={() => setGoSteps(2)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 2 && (
                  <>
                    <StepThree
                      formData={formData}
                      handleCheckboxChange={handleCheckboxChange}
                    />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev me-1"
                        onClick={() => setGoSteps(1)}
                      >
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ms-1"
                        onClick={() => setGoSteps(3)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 3 && (
                  <>
                    <StepFour
                      formData={formData}
                      handleOnSubmit={handleOnSubmit}
                      prediction={prediction}
                    />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev me-1"
                        onClick={() => setGoSteps(2)}
                      >
                        Prev
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wizard;
