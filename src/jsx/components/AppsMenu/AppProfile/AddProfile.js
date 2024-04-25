import React, { useState } from "react";
import Select from "react-select";
import PageTitle from "../../../layouts/PageTitle";

const inputBlog = [
  { label: "Name", value: "John" },
  { label: "Specialty", value: "Developer" },
  { label: "Skills", value: "HTML,  JavaScript,  PHP" },
];

const options2 = [
  { value: "1", label: "Select" },
  { value: "2", label: "Male" },
  { value: "3", label: "Female" },
  { value: "4", label: "Other" },
];
const options3 = [
  { value: "1", label: "Russia" },
  { value: "2", label: "Canada" },
  { value: "3", label: "China" },
  { value: "4", label: "India" },
];
const options4 = [
  { value: "1", label: "Krasnodar" },
  { value: "2", label: "Tyumen" },
  { value: "3", label: "Chelyabinsk" },
  { value: "4", label: "Moscow" },
];

const AddProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    skills: "",
    gender: options2[0], // Default value
    birth: "",
    phone: "",
    email: "",
    country: options3[0], // Default value
    city: options4[0], // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/add_patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Patient added successfully");
          // You can redirect or show a success message here
        } else {
          console.error("Failed to add patient");
          // Handle error, show error message, etc.
        }
      })
      .catch((error) => console.error("Error adding patient:", error));
  };

  return (
    <>
      <PageTitle activeMenu="Add Patient" motherMenu="Dashboard" />
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card profile-card card-bx mb-3">
            <div className="card-header">
              <h6 className="title">Account setup</h6>
            </div>
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  {inputBlog.map((item, ind) => (
                    <div className="col-sm-6 mb-3" key={ind}>
                      <label className="form-label">{item.label}</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={item.value}
                        name={item.label.toLowerCase()}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Gender</label>
                    <Select
                      options={options2}
                      className="custom-react-select"
                      defaultValue={options2[0]}
                      isSearchable={false}
                      onChange={(selectedOption) =>
                        setFormData({ ...formData, gender: selectedOption })
                      }
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Birth</label>
                    <input
                      className="form-control mb-xl-0 mb-3"
                      type="text"
                      id="datepicker"
                      name="birth"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="+123456789"
                      name="phone"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="demo@gmail.com"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Country</label>
                    <Select
                      options={options3}
                      className="custom-react-select"
                      defaultValue={options3[0]}
                      isSearchable={false}
                      onChange={(selectedOption) =>
                        setFormData({ ...formData, country: selectedOption })
                      }
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">City</label>
                    <Select
                      options={options4}
                      className="custom-react-select"
                      defaultValue={options4[0]}
                      isSearchable={false}
                      onChange={(selectedOption) =>
                        setFormData({ ...formData, city: selectedOption })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer card-footer align-items-center d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                  Save
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
