import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import PageTitle from "../../../layouts/PageTitle";

import Profilt from "./../../../../images/tab/1.jpg";
import selectOptions from "../../../../jsons/selectOptions.json";

const inputBlog = [
  { label: "Name", value: "", inputName: "name" },
  // { label:'Surname', value:'Brahim' },
  { label: "Age", value: "", inputName: "age" },
  // { label:'Skills', value:'HTML,  JavaScript,  PHP' },
];

const EditProfile = () => {
  // const [selectOption , setSelectOption] = useState('Gender');
  return (
    <>
      <PageTitle activeMenu="Edit Patient" motherMenu="Dashboard" />
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card profile-card card-bx mb-3">
            <div className="card-header">
              <h6 className="title">Patient information</h6>
            </div>
            <form className="profile-form">
              <div className="card-body">
                <div className="row">
                  {inputBlog.map((item, ind) => (
                    <div className="col-sm-6 mb-3" key={ind}>
                      <label className="form-label">{item.label}</label>
                      <input
                        name={item.inputName}
                        type="text"
                        className="form-control"
                        defaultValue={item.value}
                      />
                    </div>
                  ))}
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Gender</label>
                    <Select
                      name="gender"
                      options={selectOptions.genderOptions}
                      className="custom-react-select"
                      defaultValue={selectOptions.genderOptions[0]}
                      isSearchable={false}
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Race</label>
                    <Select
                      name="race"
                      options={selectOptions.raceOptions}
                      className="custom-react-select"
                      defaultValue={selectOptions.raceOptions[0]}
                      isSearchable={false}
                    />
                  </div>
                  <hr />
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Treatment</label>
                    <Select
                      name="treatment"
                      options={selectOptions.treatmentOptions}
                      className="custom-react-select"
                      defaultValue={selectOptions.treatmentOptions[0]}
                      isSearchable={false}
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">
                      Year of follow up record
                    </label>
                    <input
                      name="yearOfFollowUpRecord"
                      type="number"
                      className="form-control"
                    />
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="title">Patient cancers</h6>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Breast"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Breast"
                                >
                                  Breast
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Endocrine"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Endocrine"
                                >
                                  Endocrine
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Eye_and_adnexa"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Eye_and_adnexa"
                                >
                                  Eye and adnexa
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Gastrointestinal"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Gastrointestinal"
                                >
                                  Gastrointestinal
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Gynecological"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Gynecological"
                                >
                                  Gynecological
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Head_and_Neck"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Head_and_Neck"
                                >
                                  Head and Neck
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Hematopoietic"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Hematopoietic"
                                >
                                  Hematopoietic
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Male_Genital"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Male_Genital"
                                >
                                  Male Genital
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Musculoskeletal"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Musculoskeletal"
                                >
                                  Musculoskeletal
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Nervous_System"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Nervous_System"
                                >
                                  Nervous System
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Respiratory"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Respiratory"
                                >
                                  Respiratory
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Skin"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Skin"
                                >
                                  Skin
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Unspecified"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Unspecified"
                                >
                                  Unspecified
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Urinary"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="Urinary"
                                >
                                  Urinary
                                </label>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  name="cancer"
                                  type="checkbox"
                                  className="form-check-input"
                                  id="COD_strokeYN"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="COD_strokeYN"
                                >
                                  COD strokeYN
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-sm-6 mb-3">
                                        <label className="form-label">City</label> 
                                        <Select options={options4}  className="custom-react-select" 
                                            defaultValue={options4[0]}
                                            isSearchable={false}
                                        />
                                    </div> */}
                </div>
              </div>
              <div className="card-footer card-footer align-items-center d-flex justify-content-between">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
