import React, { useState } from "react";
import Select from "react-select";
import selectOptions from "../../../../jsons/selectOptions.json";

const StepOne = ({ formData, setFormData }) => {
  const [name, setName] = useState(formData.name || "");
  const [age, setAge] = useState(formData.age || "");
  const [gender, setGender] = useState(
    formData.gender || selectOptions.genderOptions[0]
  );
  const [race, setRace] = useState(
    formData.race || selectOptions.raceOptions[0]
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
    setFormData({ ...formData, name: e.target.value });
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setFormData({ ...formData, age: e.target.value });
  };

  const handleGenderChange = (selectedOption) => {
    setGender(selectedOption);
    setFormData({ ...formData, gender: selectedOption });
  };

  const handleRaceChange = (selectedOption) => {
    setRace(selectedOption);
    setFormData({ ...formData, race: selectedOption });
  };

  return (
    <section>
      <div className="row">
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder=""
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">
              age<span className="required">*</span>
            </label>
            <input
              name="age"
              type="number"
              className="form-control"
              value={age}
              onChange={handleAgeChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">Gender</label>
            <Select
              name="gender"
              options={selectOptions.genderOptions}
              className="custom-react-select"
              defaultValue={selectOptions.genderOptions[0]}
              isSearchable={false}
              value={gender}
              onChange={handleGenderChange}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="form-group mb-3">
            <label className="form-label">Race</label>
            <Select
              name="race"
              options={selectOptions.raceOptions}
              className="custom-react-select"
              defaultValue={selectOptions.raceOptions[0]}
              isSearchable={false}
              value={race}
              onChange={handleRaceChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
