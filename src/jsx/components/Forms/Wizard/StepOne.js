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
<<<<<<< HEAD
            <label className="text-label">Name <span className="required">*</span></label>
=======
            <label className="text-label">
              Name <span className="required">*</span>
            </label>
>>>>>>> 724af6702840c6ce98a40a5b9cd82930bc41b660
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder=""
<<<<<<< HEAD
              value={firstInfo.name}
              onChange={handleChange}
=======
              value={name}
              onChange={handleNameChange}
>>>>>>> 724af6702840c6ce98a40a5b9cd82930bc41b660
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
<<<<<<< HEAD
            <label className="text-label">Age<span className="required">*</span></label>
=======
            <label className="text-label">
              age<span className="required">*</span>
            </label>
>>>>>>> 724af6702840c6ce98a40a5b9cd82930bc41b660
            <input
              name="age"
              type="number"
              className="form-control"
<<<<<<< HEAD
              id="inputGroupPrepend2"
              aria-describedby="inputGroupPrepend2"
              value={firstInfo.age}
              onChange={handleChange}
=======
              value={age}
              onChange={handleAgeChange}
>>>>>>> 724af6702840c6ce98a40a5b9cd82930bc41b660
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
<<<<<<< HEAD
            <label className="form-label">Gender<span className="required">*</span></label>
            <Select
              required
              name="gender"
              options={selectOptions.genderOptions}
              className="custom-react-select"
              value={firstInfo.gender}
              onChange={(selectedOption) => setFirstInfo({...firstInfo, gender: selectedOption})}
              isSearchable={false}
=======
            <label className="form-label">Gender</label>
            <Select
              name="gender"
              options={selectOptions.genderOptions}
              className="custom-react-select"
              defaultValue={selectOptions.genderOptions[0]}
              isSearchable={false}
              value={gender}
              onChange={handleGenderChange}
>>>>>>> 724af6702840c6ce98a40a5b9cd82930bc41b660
            />
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="form-group mb-3">
<<<<<<< HEAD
            <label className="form-label">Race<span className="required">*</span></label>
            <Select
              required
              name="race"
              options={selectOptions.raceOptions}
              className="custom-react-select"
              value={"SDS"}
              onChange={(selectedOption) => setFirstInfo({...firstInfo, race: selectedOption})}
              isSearchable={false}
=======
            <label className="form-label">Race</label>
            <Select
              name="race"
              options={selectOptions.raceOptions}
              className="custom-react-select"
              defaultValue={selectOptions.raceOptions[0]}
              isSearchable={false}
              value={race}
              onChange={handleRaceChange}
>>>>>>> 724af6702840c6ce98a40a5b9cd82930bc41b660
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOne;