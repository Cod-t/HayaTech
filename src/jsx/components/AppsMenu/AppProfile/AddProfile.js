import React, { useState } from "react";
import Select from "react-select";
import PageTitle from "../../../layouts/PageTitle";
import selectOptions from "../../../../jsons/selectOptions.json";

const AddProfile = () => {
  // const [selectOption , setSelectOption] = useState('Gender');
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    year_of_diagnosis: null,
    race_recode_W_B_AI_API: "",
    treatment: "",
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

  const addPatient = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Optionally handle success case
        console.log("Patient added successfully");
      } else {
        console.error("Failed to add patient:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };
  return (
    <>
      <PageTitle activeMenu="Add Patient" motherMenu="Dashboard" />
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card profile-card card-bx mb-3">
            <div className="card-header">
              <h6 className="title">Patient information</h6>
            </div>
            <form className="profile-form" onSubmit={addPatient}>
              <div className="card-body">
                {/* Input fields */}
                {/* Gender select */}
                {/* Race select */}
                {/* Treatment select */}
                {/* Year of follow-up record input */}
                {/* Checkbox for cancers */}

                {/* Example for Name and Age inputs */}
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Age</label>
                    <input
                      name="age"
                      type="number"
                      className="form-control"
                      value={formData.age}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Gender select */}
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Gender</label>
                    <Select
                      options={selectOptions.genderOptions}
                      className="custom-react-select"
                      value={formData.gender}
                      onChange={(selectedOption) =>
                        handleSelectChange(selectedOption, "sex")
                      }
                      isSearchable={false}
                    />
                  </div>

                  {/* Race select */}
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Race</label>
                    <Select
                      options={selectOptions.raceOptions}
                      className="custom-react-select"
                      value={formData.race}
                      onChange={(selectedOption) =>
                        handleSelectChange(
                          selectedOption,
                          "race_recode_W_B_AI_API"
                        )
                      }
                      isSearchable={false}
                    />
                  </div>

                  {/* Treatment select */}
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Treatment</label>
                    <Select
                      options={selectOptions.treatmentOptions}
                      className="custom-react-select"
                      value={formData.treatment}
                      onChange={(selectedOption) =>
                        handleSelectChange(selectedOption, "treatment")
                      }
                      isSearchable={false}
                    />
                  </div>

                  {/* Year of follow-up record input */}
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">
                      Year of follow up record
                    </label>
                    <input
                      name="year_of_follow_up_recode"
                      type="number"
                      className="form-control"
                      value={formData.year_of_follow_up_recode}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* year_of_diagnosis record input */}
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">
                      Year of follow up record
                    </label>
                    <input
                      name="year_of_diagnosis"
                      type="number"
                      className="form-control"
                      value={formData.year_of_diagnosis}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Checkbox for cancers */}
                <div className="col-12 mb-3">
                  <div className="card">
                    <div className="card-header">
                      <h6 className="title">Patient cancers</h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        {/* Render checkboxes dynamically */}
                        {selectOptions.cancerOptions.map((cancer) => (
                          <div className="col-2" key={cancer.value}>
                            <div className="form-check custom-checkbox mb-3">
                              <input
                                name={cancer.value}
                                type="checkbox"
                                className="form-check-input"
                                id={cancer.value}
                                // checked={formData.cancers.includes(
                                //   cancer.value
                                // )}
                                checked={formData[cancer.value]}
                                onChange={handleCheckboxChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={cancer.value}
                              >
                                {cancer.label}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer card-footer align-items-center d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                  Add patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProfile;
