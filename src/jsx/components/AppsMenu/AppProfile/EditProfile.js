import React, { useState, useEffect } from "react";
import Select from "react-select";
import PageTitle from "../../../layouts/PageTitle";
import selectOptions from "../../../../jsons/selectOptions.json";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  // Get the value of the 'id' parameter
  const id = params.get("id");
  // const [selectOption , setSelectOption] = useState('Gender');
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
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:5000/patient/${id}`
          );
          const jsonData = response.data;
          // Set form data based on received patient information
          setFormData({
            name: jsonData.name,
            sex: jsonData.sex,
            treatment: jsonData.treatment,
            year_of_diagnosis: jsonData.year_of_diagnosis,
            race_recode_W_B_AI_API: jsonData.race_recode_W_B_AI_API,
            year_of_follow_up_recode: jsonData.year_of_follow_up_recode,
            breast: jsonData.breast,
            endocrine: jsonData.endocrine,
            eye_and_adnexa: jsonData.eye_and_adnexa,
            gastrointestinal: jsonData.gastrointestinal,
            gynecological: jsonData.gynecological,
            head_and_neck: jsonData.head_and_neck,
            hematopoietic: jsonData.hematopoietic,
            male_genital: jsonData.male_genital,
            musculoskeletal: jsonData.musculoskeletal,
            nervous_system: jsonData.nervous_system,
            respiratory: jsonData.respiratory,
            skin: jsonData.skin,
            unspecified: jsonData.unspecified,
            urinary: jsonData.urinary,
            age: jsonData.age,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [id]);

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

  const editPatient = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://127.0.0.1:5000/patient/${id}`,
        formData
      );
      toast.success("Patient updated successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
      });
      navigate('/patients')
    } catch (error) {
      toast.error("Error updating patient", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
            <form className="profile-form" onSubmit={editPatient}>
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
                      value={selectOptions.genderOptions.find(
                        (option) => option.value === formData.sex
                      )}
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
                      value={selectOptions.raceOptions.find(
                        (option) =>
                          option.value === formData.race_recode_W_B_AI_API
                      )}
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
                      value={selectOptions.treatmentOptions.find(
                        (option) => option.value === formData.treatment
                      )}
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
                  Update patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
