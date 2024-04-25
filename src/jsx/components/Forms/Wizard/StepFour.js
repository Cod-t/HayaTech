import React, { useState } from "react";
import { Link } from "react-router-dom";

const StepFour = ({ formData }) => {
  const handleSubmit = () => {
    // Handle form submission using formData
    console.log("Form Data:", formData);
    // Perform necessary actions, such as sending data to server
  };
  return (
    <section>
      <div>
        {formData.name === "" && formData.age === "" ? (
          ""
        ) : (
          <p className="text-center">
            You are predicting stroke probability for the patient{" "}
            {formData.name} at the age {formData.age}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="name" value={formData.name || ""} />
        <input type="hidden" name="age" value={formData.age || ""} />
        <input type="hidden" name="gender" value={formData.gender || ""} />
        <input type="hidden" name="name" value={formData.race || ""} />
        <input
          type="hidden"
          name="treatment"
          value={formData.treatment || ""}
        />
        <input
          type="hidden"
          name="yearOfFollowUpRecord"
          value={formData.yearOfFollowUpRecord || ""}
        />
        <input type="hidden" name="cancer" value={formData.cancer || ""} />
        {/* Add other form fields here based on your previous steps */}
        <div className="text-center">
          <button type="submit" className="me-2 btn btn-primary btn-rounded">
            Predict
          </button>
        </div>
      </form>
      {/* Add a loading thingie */}
      {/* <div className="row">
            <div className="col-12">
               <div className="skip-email text-center pt-5 pb-2">
                  <p>Or if want skip this step entirely and setup it later</p>
                  <Link to="#" className="wizard-four-color">
                     Skip step
                  </Link>
               </div>
            </div>
         </div> */}
    </section>
  );
};

export default StepFour;
