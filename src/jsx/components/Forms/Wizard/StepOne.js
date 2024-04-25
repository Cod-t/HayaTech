import React, { useState } from "react";
import Select from "react-select";
import selectOptions from '../../../../jsons/selectOptions.json';

const StepOne = () => {
  const [firstInfo, setFirstInfo] = useState({
    name: "",
    age: "",
    gender: selectOptions.genderOptions[0],
    race: selectOptions.raceOptions[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFirstInfo({
      ...firstInfo,
      [name]: value
    });
  };

  return (
    <section>
      <div className="row">
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Name <span className="required">*</span></label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder=""
              value={firstInfo.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Age<span className="required">*</span></label>
            <input
              name="age"
              type="number"
              className="form-control"
              id="inputGroupPrepend2"
              aria-describedby="inputGroupPrepend2"
              value={firstInfo.age}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">Gender<span className="required">*</span></label>
            <Select
              required
              name="gender"
              options={selectOptions.genderOptions}
              className="custom-react-select"
              value={firstInfo.gender}
              onChange={(selectedOption) => setFirstInfo({...firstInfo, gender: selectedOption})}
              isSearchable={false}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="form-group mb-3">
            <label className="form-label">Race<span className="required">*</span></label>
            <Select
              required
              name="race"
              options={selectOptions.raceOptions}
              className="custom-react-select"
              value={"SDS"}
              onChange={(selectedOption) => setFirstInfo({...firstInfo, race: selectedOption})}
              isSearchable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOne;